import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// vite.config.js for github pages
export default defineConfig({
  base: '/AIPromptGen/', // Thay bằng tên repo trên GitHub
  plugins: [vue()],
})

