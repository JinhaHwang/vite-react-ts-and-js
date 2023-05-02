import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@/vuexy',
        replacement: path.resolve(__dirname, 'src/libs/vuexy'),
      },
      {
        find: '@/components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
    ],
  },
})