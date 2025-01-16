import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: '/mtcbpdc',

  // https://medium.com/@pushplaybang/absolutely-dont-use-relative-paths-imports-in-your-vite-react-project-c8593f93bbea
  resolve: {
    alias: {
      content: "/content",
      src: "/src",
      assets: "/src/assets",
    }
  }
})
