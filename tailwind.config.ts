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
      /* COLORES */
      colors: {
        ColorPurple: '#7A11B2',
        ColorPurpleDark: '#34074C',
      },
      /* SOMBRAS */
      boxShadow: {
        Custom: '0px 1px 15px 1px #9CA3AF',
        darkCustom: '0px 1px 15px 1px #250536',
      },
      /* KEYFRAME */
      keyframes: {
        floatTop: {
          '0%, 100%': { transform: 'translate(-50%, 0)' },
          '50%': { transform: 'translate(-50%, 20px)' },
        },
        floatBottom: {
          '0%, 100%': { transform: 'translate(-50%, 0)' },
          '50%': { transform: 'translate(-50%, -20px)' },
        },
        floatRight: {
          '0%, 100%': { transform: 'translate(0, -50%)' },
          '50%': { transform: 'translate(-20px, -50%)' },
        },
        floatLeft: {
          '0%, 100%': { transform: 'translate(0, -50%)' },
          '50%': { transform: 'translate(20px, -50%)' },
        },
        floatRandom1: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(150px, 200px) rotate(360deg)' },
        },
        floatRandom2: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-100px, -150px) rotate(-180deg)' },
        },
        floatRandom3: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(200px, -100px) rotate(270deg)' },
        },
        floatRandom4: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-200px, 100px) rotate(90deg)' },
        },
        floatRandom5: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(120px, -80px) rotate(-360deg)' },
        },
      },
      /* ANIMACIONES */
      animation: {
        'float-top': 'floatTop 2s ease-in-out infinite',
        'float-bottom': 'floatBottom 2s ease-in-out infinite',
        'float-right': 'floatRight 2s ease-in-out infinite',
        'float-left': 'floatLeft 2s ease-in-out infinite',
        'float-random-1': 'floatRandom1 4s ease-in-out infinite',
        'float-random-2': 'floatRandom2 4s ease-in-out infinite',
        'float-random-3': 'floatRandom3 4s ease-in-out infinite',
        'float-random-4': 'floatRandom4 4s ease-in-out infinite',
        'float-random-5': 'floatRandom5 4s ease-in-out infinite',
      },
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
};

export default config;
