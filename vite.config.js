import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Assurez-vous que le chemin du point d'entrée est correct
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    // Spécifiez le chemin de sortie (si nécessaire)
    outDir: 'dist',
  },
 
})
