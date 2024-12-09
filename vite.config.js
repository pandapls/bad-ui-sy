/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			unfetch: 'unfetch/dist/unfetch.js',
			'bad-ui-sy': path.resolve(__dirname, './src/index.ts'),
		},
	},
	test: {
		globals: true,
		environment: 'jsdom'
	},
});
