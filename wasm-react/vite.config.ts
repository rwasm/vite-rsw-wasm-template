import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteRsw from 'vite-plugin-rsw'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteRsw(),
  ],
})
