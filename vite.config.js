import { defineConfig } from 'vite'
import babel from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      }
    })
  ],
  server: {
    port: 3038
  }
})
