// ✅ Correct config for your Render setup
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // 👈 your app is at the root URL
  server: {
    port: 5173,
    strictPort: true,
  },
});
