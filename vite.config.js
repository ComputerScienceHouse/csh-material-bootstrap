import { defineConfig } from 'vite'
import { version } from './package.json'

export default defineConfig({
  define: {
    'import.meta.env.VITE_APP_VERSION': version,
  }
})
