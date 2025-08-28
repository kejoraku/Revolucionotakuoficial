import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    strictPort: true, // Evita que cambie de puerto si está ocupado
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})


