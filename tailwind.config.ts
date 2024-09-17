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
          '50%': { transform: 'translate(100px, 100px) rotate(180deg)' },
        },
        floatRandom2: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-150px, 50px) rotate(-90deg)' },
        },
        floatRandom3: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(50px, -100px) rotate(45deg)' },
        },
        floatRandom4: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-100px, -50px) rotate(135deg)' },
        },
        floatRandom5: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(120px, -80px) rotate(-45deg)' },
        },
        floatRandom6: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-80px, 120px) rotate(90deg)' },
        },
        floatRandom7: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(70px, -130px) rotate(-120deg)' },
        },
      },
      /* ANIMACIONES */
      animation: {
        'float-top': 'floatTop 15s ease-in-out infinite',
        'float-right': 'floatRight 18s ease-in-out infinite',
        'float-bottom': 'floatBottom 20s ease-in-out infinite',
        'float-left': 'floatLeft 17s ease-in-out infinite',
        'float-random-1': 'floatRandom1 15s ease-in-out infinite',
        'float-random-2': 'floatRandom2 18s ease-in-out infinite',
        'float-random-3': 'floatRandom3 20s ease-in-out infinite',
        'float-random-4': 'floatRandom4 22s ease-in-out infinite',
        'float-random-5': 'floatRandom5 25s ease-in-out infinite',
        'float-random-6': 'floatRandom6 23s ease-in-out infinite',
        'float-random-7': 'floatRandom7 21s ease-in-out infinite',
      },
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
};

export default config;