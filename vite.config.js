import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Bulletproof path resolution configuration
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    },
  },
});
