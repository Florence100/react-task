// /* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['text', 'html'],
      all: true,
      include: ['**/*.{jsx,tsx}'],
    },
  },
};

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
  },
  // test: vitestConfig.test,
});