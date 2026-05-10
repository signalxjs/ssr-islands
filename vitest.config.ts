import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
    oxc: {
        jsx: {
            runtime: 'automatic',
            importSource: 'sigx'
        }
    },
    test: {
        environment: 'happy-dom',
        include: ['packages/**/__tests__/**/*.test.{ts,tsx}'],
        // These integration tests reach into @sigx/server-renderer's internals
        // via relative paths (../../server-renderer/src/...). They were
        // workspace-internal in viewti/lynx and only run there until either
        // server-renderer exposes more subpath exports or we rewrite them
        // against public APIs.
        exclude: [
            '**/node_modules/**',
            'packages/ssr-islands/__tests__/**/*.test.tsx'
        ],
        globals: true,
        passWithNoTests: true,
    },
    resolve: {
        alias: {
            '@sigx/ssr-islands': resolve(__dirname, 'packages/ssr-islands/src/index.ts')
        }
    }
});
