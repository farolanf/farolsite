import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: false,
  shortcuts: {
    'container-ext': 'mx-auto px-20px',
  },
  extract: {
    include: ['src/**/*.{js,ts,jsx,tsx,astro}'],
  },
})