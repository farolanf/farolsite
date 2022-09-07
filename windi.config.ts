import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'

export default defineConfig({
  extract: {
    include: ['src/**/*.{js,ts,jsx,tsx,astro}'],
  },
})