// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import 'path' module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Use the 'path' module to ensure correct path resolution
      '@': path.resolve(__dirname, './src'),
    },
  },
});