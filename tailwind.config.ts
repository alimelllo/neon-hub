import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-[#56e1f0]',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      'md': {'max': '870px'},
      // => @media (max-width: 860px) { ... }
      'sm': {'max': '450px'},
      // => @media (max-width: 450px) { ... }
      'xsm':{'max': '400'},
      // => @media (max-width: 400px) { ... }
      '2xsm':{'max': '350px'},
      // => @media (max-width: 350px) { ... }
    },
  },
  
  plugins: [],
}
export default config
