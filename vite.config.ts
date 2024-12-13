import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export const alias = {
  '@': resolve(__dirname, 'src/app'),
  '@demo': resolve(__dirname, 'src/modules/demo'),
  '@shared': resolve(__dirname, 'src/shared'),
};

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias,
  },
});
