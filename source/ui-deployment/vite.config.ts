// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';

export default defineConfig({
    plugins: [react(), viteTsconfigPaths()],
    build: {
        outDir: 'build',
        chunkSizeWarningLimit: 4000
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    define: {
        global: 'window'
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './setupTests.ts',
        coverage: {
            provider: 'v8',
            reporter: ['lcov', 'text'],
            exclude: [
                '**/node_modules/**',
                '**/build/**',
                '**/.{git,tmp}/**',
                '**/interfaces/**',
                'src/__test__/**',
                'coverage/**',
                'test/*.js',
                'src/App.jsx',
                'src/index.jsx'
            ]
        },
        exclude: ['**/node_modules/**', '**/build/**', '**/.{git,tmp}/**']
    },
    server: {
        port: 5177
    }
});
