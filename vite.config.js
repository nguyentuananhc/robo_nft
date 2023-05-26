import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@assets',
        replacement: path.join(__dirname, 'src', 'assets'),
      },
      {
        find: '@components',
        replacement: path.join(__dirname, 'src', 'components'),
      },
      {
        find: '@sections',
        replacement: path.join(__dirname, 'src', 'sections'),
      },
      { find: '@hooks', replacement: path.join(__dirname, 'src', 'hooks') },
      { find: '@utils', replacement: path.join(__dirname, 'src', 'utils') },
    ],
  },
})
