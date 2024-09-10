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
        PurpleColor: '#250069',
        DarkPurpleColor: '#7A11B2',
      },
      boxShadow: {
        custom: '0px 3px 10px 1px #202D3C',
        darkCustom: '0px 3px 10px 1px #CBD5E1',
      },
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
};
export default config;
