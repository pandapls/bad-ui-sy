/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
function resolve(str) {
	return path.resolve(__dirname, str);
}

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			// ! 发版的时候配置
			// 打包到一个index.d.ts文件中
			// rollupTypes: true,
		}),
	],
	resolve: {
		alias: {
			unfetch: 'unfetch/dist/unfetch.js',
			'bad-ui-sy': path.resolve(__dirname, './src/index.ts'),
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
	},
	build: {
		outDir: 'dist',
		lib: {
			entry: resolve('src/index.ts'),
			name: 'bad-ui-sy',
			fileName: (format) => `bad-ui-sy.${format}.js`,
			formats: ['cjs', 'es', 'umd'],
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
				format: 'cjs',
			},
		},
	},
});
