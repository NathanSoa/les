import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(16rem, 18rem) 1fr',
      },
      colors: {
        'blue-theme': '#2d53da',
        'blue-theme-light': '#2de9fa',
      },
    },
  },
  plugins: [],
}
export default config
