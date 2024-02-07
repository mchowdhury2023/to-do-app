/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// Other plugins you use...

export default defineConfig({
  plugins: [react() /* other plugins */],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: ["./vitest.setup.js"],
  },
});
