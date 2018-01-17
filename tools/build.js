const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');
const chokidar = require('chokidar');
const rimraf = require('rimraf');
const spinner = require('ora')();
const version = require('../package.json').version;

const args = require('yargs')
  .version(version)
  .usage(
    `Usage:
$0 [OPTIONS] [--watch]`
  )
  .option('w', {
    alias: 'watch',
    desc: 'Watch for changes and rebuild automatically',
    type: 'boolean'
  })
  .alias('h', 'help')
  .argv;

const config = {
  root: path.resolve(__dirname, '..'),
  src: path.resolve(__dirname, '../src'),
  entrypoint: path.resolve(__dirname, '../src/csh-material-bootstrap.scss'),
  dist: path.resolve(__dirname, '../dist/')
};

function exec(command) {
  return new Promise((resolve, reject) => shell.exec(command, { silent: true },
    (code, value, error) => {
      if (code) {
        return reject(error);
      }
      resolve(value);
    }
  ));
}

function clean(glob) {
  return new Promise((resolve, reject) => rimraf(glob, {}, (error) => {
    if (error) {
      return reject(error);
    }
    resolve();
  }));
}

function fail(error, message) {
  spinner.fail(chalk.bold.red(`${message}\n${error}`));
  shell.exit(1);
}

async function build() {
  try {
    spinner.start('Clean Build Artifacts');
    await clean(config.dist);
    spinner.succeed(chalk.green(spinner.text));

    spinner.start('Compile SCSS to CSS');
    await exec(`node-sass --include-path ${path.resolve(config.root, 'node_modules')} ${config.entrypoint} -o ${config.dist}`);
    spinner.succeed(chalk.green(spinner.text));

    spinner.start('Postprocess Stylesheet');
    const filename = config.entrypoint.replace(config.src, config.dist).replace('.scss', '.css');
    await exec(`postcss --config ${path.resolve(config.root, './tools/postcss.config.js')} --replace ${filename}`);
    spinner.succeed(chalk.green(spinner.text));

    spinner.start('Minify Stylesheet');
    const filename_minified = filename.replace('.css', '.min.css');
    await exec(`postcss ${filename} --no-map --use cssnano --output ${filename_minified}`);
    spinner.succeed(chalk.green(spinner.text));
  } catch (error) {
    fail(error, 'Failed to compile stylesheet')
  }
}

Promise.resolve()
  .then(() => build())
  .then(() => {
    if (args.watch) {
      const watcher = chokidar.watch(config.src);
      watcher
        .on('ready', () => {
          spinner.start(chalk.bold.cyan('Waiting for file changes...'));
        })
        .on('change', file => {
          spinner.info(chalk.blue('Changes detected, rebuilding'));
          return build()
            .then(() => {
              spinner.start(chalk.bold.cyan('Waiting for file changes...'))
            });
        });
    }
  })
  .catch(error => {
    fail(error, 'An unexpected error occured');
  });
