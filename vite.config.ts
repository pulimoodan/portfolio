import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/articles": {
        target: "https://dev.to/api",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
