/// <reference types="vitest" />

import { defineConfig, ConfigEnv } from 'vite';
import analog from '@analogjs/platform';
import tsconfigPaths from 'vite-tsconfig-paths';
import { getPrerenderedRoutes } from './tools/pre-render';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  return {
    build: {
      target: ['es2020'],
    },
    resolve: {
      conditions: ['import', 'require'],
      mainFields: ['module'],
    },
    ssr: {
      noExternal: ['@medusajs/js-sdk']
    },
    plugins: [
      analog({
        prerender: {
          routes: async () => {
            const routes = await getPrerenderedRoutes();
            return routes || [];
          },
        },
      }),
      tsconfigPaths(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
};
