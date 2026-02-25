import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        darbare: resolve(__dirname, "darbare.html"),
        rashte: resolve(__dirname, "rashte.html"),
        barnameye: resolve(__dirname, "barnameye.html"),
        moshaverIn: resolve(__dirname, "moshaverIn.html"),
        modiriat: resolve(__dirname, "modiriat.html"),
        shomare: resolve(__dirname, "shomare.html"),
      },
    },
  },
});
