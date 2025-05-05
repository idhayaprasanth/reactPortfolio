import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Ensure this is included
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "./localhost-key.pem")), // Correct path to the key
      cert: fs.readFileSync(path.resolve(__dirname, "./localhost.pem")), // Correct path to the certificate
    },
     watch: {
      usePolling: true,
    },
   
    proxy: {
      // Proxy settings, if needed for local APIs
    },
  },
 
  },
);
