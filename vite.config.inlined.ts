import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteSingleFile()],
	build: {
		cssCodeSplit: false,
		assetsInlineLimit: 100000000,
		rollupOptions: {
			output: {
				manualChunks: () => "everything.js",
			},
		},
	},
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: 'views', replacement: '/src/views' },
      { find: 'components', replacement: '/src/components' },
    ]
  },
  server: {
    open: true,
  },
  define: {
    'process.env': process.env
  }
})
