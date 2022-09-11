import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: false,
  shortcuts: {
    'container-ext': 'mx-auto px-20px',
    'input': 'leading-42px px-20px rounded-md border-1 border-gray-200 border-solid hover:border-gray-300',
    'button': 'leading-44px px-24px border-0 rounded-md cursor-pointer hover:shadow active:shadow-none',
    'center': 'top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]',
  },
  extract: {
    include: ['src/**/*.{js,ts,jsx,tsx,astro}'],
  },
})