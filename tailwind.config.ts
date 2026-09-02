import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1A1A2E',
        gold: '#B8972E',
        cream: '#F7F4EF'
      }
    }
  },
  plugins: []
};

export default config;
