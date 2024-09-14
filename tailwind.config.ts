import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{html,js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ColorPurple: '#7A11B2',
        ColorPurpleDark: '#34074C',
      },
      boxShadow: {
        Custom: '0px 1px 15px 1px #9CA3AF',
        darkCustom: '0px 1px 15px 1px #250536',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(45deg)' },
          '50%': { transform: 'translateY(-20px) rotate(45deg)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0) rotate(45deg)' },
          '50%': { transform: 'translateY(-40px) rotate(45deg)' },
        },
      },
      animation: {
        'float-slow': 'floatSlow 60s ease-in-out infinite',
        'float-fast': 'floatFast 60s ease-in-out infinite',
      },
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
};
export default config;
