import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
      "@/app": "/src/app",
      "@/entities": "/src/entities",
      "@/features": "/src/features",
      "@/pages": "/src/pages",
      "@/shared": "/src/shared",
      "@/widgets": "/src/widgets",
    },
  },
});
