import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ["demo-mf-app"].includes(tag),
        },
      },
    }),
  ],
  build: {
    target: "es2022",
  },
});
