import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: 'node_modules/.vite/vcp-admin-ui',
  // server: {
  //   port: 4200,
  //   host: 'localhost',
  // },
  // preview: {
  //   port: 4300,
  //   host: 'localhost',
  // },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@/vuexy',
        replacement: path.resolve(__dirname, 'src/libs/vuexy/components'),
      },
    ],
  },
  test: {
    globals: true,
    cache: {
      dir: 'node_modules/.vitest',
    },
    environment: 'happy-dom', // or 'jsdom', 'node'
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
})
