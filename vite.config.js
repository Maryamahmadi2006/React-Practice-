import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves the site from /React-Practice-/ (the repo name),
  // so all asset paths must start with it. Without this you get a blank page.
  base: "/React-Practice-/",
});
