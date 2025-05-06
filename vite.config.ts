import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist", // <-- This tells Vercel where the build output goes
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
});
