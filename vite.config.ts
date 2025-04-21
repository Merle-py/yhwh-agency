import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
// vite.config.ts

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: '/yhwh-agency/',
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  base: '/yhwh-agency/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
