import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // base: "/",
  base: "/portfolio/",
  plugins: [vue(), tailwindcss()],
  build: {
    outDir: "dist", // folder hasil build (standar Vite)
    // assetsDir: "assets", // tempat asset statis
    // sourcemap: false, // optional: matikan sourcemap untuk production
  },
  server: {
    open: true, // auto open browser saat dev server
  },
});
