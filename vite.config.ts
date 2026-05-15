import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Default to root — Vercel (and any custom-domain deploy) serves the site
  // from /. Override with BASE_PATH=/nicsaa.com/ when deploying to GitHub
  // Pages under https://prajola.github.io/nicsaa.com/.
  base: process.env.BASE_PATH ?? "/",
  plugins: [react(), tailwindcss()],
  server: {
    // Allow tunnels (cloudflared, ngrok, etc.) to forward to the dev server
    allowedHosts: true,
  },
});
