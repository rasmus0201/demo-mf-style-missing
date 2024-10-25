import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from "@module-federation/vite";
// @ts-ignore
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./WebComponent": "./src/main.ts",
      },
    }),
    // cssInjectedByJsPlugin(), // Toggle this plugin to see that it injects the styling
  ],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    emptyOutDir: true,
    target: ["es2022"],
    lib: {
      entry: "./src/main.ts",
      formats: ["es"],
    },
    rollupOptions: {
      input: {
        // Necessary to also include index.html in the build,
        // This allows preview mode to work in "vite library mode" and then playwright can load the page
        // @see https://github.com/vitejs/vite/issues/7009#issuecomment-1963123981
        "index.html": "index.html",
      },
    },
  },
  server: {
    port: 8080,
  },
  preview: {
    port: 8080,
  },
});
