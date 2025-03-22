import { resolve } from 'node:path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true // Silences warnings from dependencies
      }
    }
  }
}