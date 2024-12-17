import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export const alias = {
  '@': resolve(__dirname, 'src/app'),
  '@demo': resolve(__dirname, 'src/modules/demo'),
};

export default defineConfig({
  plugins: [react(), VitePWA({ registerType: 'autoUpdate' })],
  resolve: {
    alias,
  },
});
