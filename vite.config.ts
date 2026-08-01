import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react-hot-toast', 'framer-motion', 'react-countup', 'react-type-animation'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer': ['framer-motion'],
          'three': ['three', '@react-three/fiber', '@react-three/drei'],
          'ui-libs': ['swiper', 'react-countup', 'react-type-animation'],
          'icons': ['react-icons', 'lucide-react'],
        },
      },
    },
  },
});
