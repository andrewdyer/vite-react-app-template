import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export const alias = {
  '@': resolve(__dirname, 'src/app'),
  '@demo': resolve(__dirname, 'src/modules/demo'),
};

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Vite React App Template',
        short_name: 'VRA Template',
        description:
          'A template for building frontend applications using Vite and React with TypeScript.',
        theme_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias,
  },
});
