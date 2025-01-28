import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  server: {
    host: true,
    port: 5015,
  },
  preview: {
    host: true,
    port: 5016,
    hmr: {
      host: 'localhost',
      protocol: 'wss',
      clientPort: 443
    }
  },
  plugins: [
    vue(),
    tailwindcss()
  ]
})