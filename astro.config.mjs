import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';
import WindiCss from 'vite-plugin-windicss';
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs()],
  vite: {
    plugins: [VitePWA(), WindiCss()],
  },
});