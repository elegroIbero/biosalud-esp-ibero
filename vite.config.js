import { defineConfig } from 'vite';
import babel from '@vitejs/plugin-react';

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/_variables.scss";`,
			},
		},
	},
	plugins: [
		babel({
			filter: /\.[jt]sx?$/,
			babelConfig: {
				presets: ['@babel/preset-env', '@babel/preset-react'],
			},
		}),
	],
	server: {
		port: 80,
	},
});
