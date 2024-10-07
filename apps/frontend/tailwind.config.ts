import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'custom': {
          100: '#e74645',
          200: '#fb7756',
          300: '#facd60',
          400: '#fdfa66',
          500: '#1ac0c6',
        }
      },
    },
  },
  plugins: [],
}
export default config
