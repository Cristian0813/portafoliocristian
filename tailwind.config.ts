import {nextui} from '@nextui-org/react';
import type { Config } from "tailwindcss";

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
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
};
export default config;
