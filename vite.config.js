import { defineConfig } from 'vite';
import babel from '@vitejs/plugin-react';
import sass from 'vite-plugin-sass';

export default defineConfig({
	plugins: [
		sass(),
		babel({
			filter: /\.[jt]sx?$/,
			babelConfig: {
				presets: ['@babel/preset-env', '@babel/preset-react'],
			},
		}),
	],
	server: {
		port: 3038,
	},
});
