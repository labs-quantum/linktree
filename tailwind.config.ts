import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        quantum: {
          'base-100': '#000000',
          'base-content': '#e0ecff',
        },
      },
    ],
    logs: false,
  },
}
