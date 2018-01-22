const path = require('path');
const mime = require('mime-types');
const fs = require('fs-extra');
const shell = require('shelljs');
const aws = require('aws-sdk');
const globby = require('globby');
const chalk = require('chalk');
const spinner = require('ora')();
const metadata = require('../package.json');

aws.config.update({
  s3ForcePathStyle: true,
  endpoint: 'https://s3.csh.rit.edu'
});
const s3 = new aws.S3();

const config = {
  root: path.resolve(__dirname, '..'),
  artifacts: [
    'index.html',
    'dist/*',
    'src/*'
  ],
  bucket: metadata.name,
  dest: metadata.version,
  acl: 'public-read'
};

function upload(srcPath, destPath) {
  return fs.readFile(srcPath)
    .then(data => {
      const params = {
        Bucket: config.bucket,
        Key: destPath,
        Body: data,
        ACL: config.acl
      };

      const mimeType = mime.lookup(srcPath);
      if (mimeType) {
        params['ContentType'] = mimeType;
      }

      return s3.upload(params).promise();
    });
}

async function deploy() {
  const uploaders = [];

  for (let artifact of config.artifacts) {
    const filenames = await globby(path.resolve(config.root, artifact));

    for (let filename of filenames) {
      let destPath = `${config.dest}/${path.dirname(artifact)}/${path.basename(filename)}`;

      if (path.dirname(artifact) === '.') {
        destPath = `${config.dest}/${path.basename(filename)}`;
      }

      uploaders.push(
        upload(filename, destPath)
      );
    }
  }

  return Promise.all(uploaders);
}

function fail(error, message) {
  if (typeof error === 'string') {
    spinner.fail(chalk.bold.red(error));
  } else {
    spinner.fail(chalk.bold.red(`${message}\n${error}`))
  }

  shell.exit(1);
}

Promise.resolve()
  .then(() => fs.pathExists(path.resolve(config.root, 'dist')))
  .then(exists => {
    if (!exists) {
      fail('You must build the project before deploying');
    }
  })
  .then(() => {
    spinner.start('Upload Artifacts to S3');
    return deploy();
  })
  .then(() => {
    spinner.succeed(chalk.green(spinner.text));
  })
  .catch(error => {
    fail(error, 'Failed to deploy artifacts to S3')
  });
