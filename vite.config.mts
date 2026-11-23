import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Vue from "@vitejs/plugin-vue";
import VueRouter from "vue-router/vite";
import { imagetools } from "vite-imagetools";

import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    imagetools(),
    // File-based routes from src/pages. Must come before Vue().
    VueRouter({
      dts: "src/typed-router.d.ts",
    }),
    AutoImport({
      imports: ["vue", { "vue-router": ["useRoute", "useRouter"] }],
      dts: "src/auto-imports.d.ts",
      vueTemplate: true,
    }),
    Components({
      dts: "src/components.d.ts",
    }),
    Vue(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
});
