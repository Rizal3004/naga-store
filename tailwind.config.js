/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      keyframes: {
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(400px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(-800px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {  // New fadeIn keyframe
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        wiggleMore: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
      animation: {
        'fade-down': 'fadeDown 1s ease-out',
        'fade-left': 'fadeLeft 1s ease-out',
        'fade-right': 'fadeRight 1s ease-out',
        'fade-up': 'fadeUp 1s ease-out',
        'fade-in': 'fadeIn 1s ease-out',  // New fade-in animation
        'wiggle-more': 'wiggleMore 1s ease-in-out infinite',
      },
    },
  },
  plugins: [daisyui],
};
