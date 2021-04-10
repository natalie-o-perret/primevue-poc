import { defineConfig } from 'vite'
import { getAliases } from 'vite-aliases'
import vue from '@vitejs/plugin-vue'

const aliases = getAliases();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true,
  },
  build: {
    cssCodeSplit: false,
    target: 'esnext',
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: 'views', replacement: '/src/views' },
      { find: 'components', replacement: '/src/components' },
    ]
  },
  define: {
    'process.env': process.env
  }
})
