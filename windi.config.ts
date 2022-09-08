import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    fontFamily: {
      inconsolata: ['inconsolata'],
    },
  },
  shortcuts: {
    'container-ext': 'mx-auto px-15px lg:px-0',
  },
  extract: {
    include: ['src/**/*.{js,ts,jsx,tsx,astro}'],
  },
})