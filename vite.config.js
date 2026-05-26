import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/frontend_sprookje_copy/' : '/',
    server: {
      port: 4173,
    },
  };
});
