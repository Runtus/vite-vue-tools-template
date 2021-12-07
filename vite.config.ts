import { defineConfig } from 'vite'
// @ts-ignore
import * as path from 'path'
import vue from '@vitejs/plugin-vue'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // @ts-ignore
      '@': path.resolve(__dirname, "./src")
    }
  }
})
