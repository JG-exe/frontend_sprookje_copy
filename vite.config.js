import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/frontEnd-sprookje-JoachimGautama/' : '/',
  };
});

// base might change to `/frontEnd-sprookje-JoachimGautama/` according to prof
