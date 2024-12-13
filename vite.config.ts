import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/app'),
      '@demo': resolve(__dirname, 'src/modules/demo'),
      '@shared': resolve(__dirname, 'src/shared'),
    },
  },
});
