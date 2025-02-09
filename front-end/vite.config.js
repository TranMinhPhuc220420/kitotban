import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@public": `${path.resolve(__dirname, "./public/")}`,
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@styles": `${path.resolve(__dirname, "./src/styles/")}`,
      "@config": `${path.resolve(__dirname, "./src/config/")}`,
      "@utils": `${path.resolve(__dirname, "./src/utils/")}`,
      "@constants": `${path.resolve(__dirname, "./src/constants/")}`,
      "@reducers": `${path.resolve(__dirname, "./src/store/reducers/")}`,
      "@actions": `${path.resolve(__dirname, "./src/store/actions/")}`,
    },
  },
})
