import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// vite.config.js for github pages
export default defineConfig(({ command }) => {
  return {
    plugins: [vue()],
    base: command === 'build' ? '/AIPromptGen/' : '/',
  }
})

