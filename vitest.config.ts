import { defineConfig } from 'vitest/config';

import { alias } from './vite.config';

/**
 * See https://vitest.dev/config.
 */
export default defineConfig({
  resolve: {
    alias,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules'],
    coverage: {
      all: false,
      enabled: true,
      provider: 'v8',
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
      reporter: ['text', 'json', 'html'],
      exclude: [
        'dist',
        'node_modules',
        'src/**/*.d.ts',
        'src/**/index.{js,jsx,ts,tsx}',
        'src/**/*.stories.{js,jsx,ts,tsx}',
        'src/**/*.test.{js,jsx,ts,tsx}',
      ],
    },
  },
});
