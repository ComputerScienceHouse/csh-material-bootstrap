import { defineConfig } from 'vite'
import { version } from './package.json'

export default defineConfig({
  base: './',
  define: {
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(version),
  },
  build: {
    outDir: "s3-output"
  }
})
