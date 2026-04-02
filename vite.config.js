import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/",
});

// base might change to `/frontEnd-sprookje-JoachimGautama/` according to prof
