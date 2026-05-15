import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // GitHub Pages serves this repo at https://prajola.github.io/nicsaa.com/,
  // so assets must be prefixed with the repo path. Override at build time
  // (e.g. BASE_PATH=/) when deploying to a custom domain or root.
  base: process.env.BASE_PATH ?? "/nicsaa.com/",
  plugins: [react(), tailwindcss()],
  server: {
    // Allow tunnels (cloudflared, ngrok, etc.) to forward to the dev server
    allowedHosts: true,
  },
});
