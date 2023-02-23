import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

import { resolve, dirname } from "node:path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      "@": resolve(dirname(""), "src"),
    },
  },
});
