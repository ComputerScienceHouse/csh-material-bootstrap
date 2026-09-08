import { defineConfig } from 'vite'
import { version } from './package.json'

function watchPublicDir(options = { filePaths: [] }) {
  return {
    name: 'watch-public-dir',
    configureServer(server) {
      options.filePaths.forEach((f) => {
        server.watcher.add(f);
      });

      function onWatchChange(_) {
        server.ws.send({ type: 'full-reload' });
      }
      server.watcher.on('add', onWatchChange);
      server.watcher.on('unlink', onWatchChange);
      server.watcher.on('change', onWatchChange);
    }
  }
}

export default defineConfig({
  base: './',
  define: {
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(version),
  },
  build: {
    outDir: "s3-output"
  },
  plugins: [watchPublicDir({filePaths: ['./public/dist/**/*']})]
})
