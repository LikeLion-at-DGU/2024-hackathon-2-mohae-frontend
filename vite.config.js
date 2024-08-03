// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "slick-carousel/slick/slick.css",
        "slick-carousel/slick/slick-theme.css",
      ],
    },
  },
});
