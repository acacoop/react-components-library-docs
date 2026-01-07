import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/components-library-docs/",
  server: {
    port: 3000,
  },
});
