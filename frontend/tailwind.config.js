module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        crimson: ['Crimson Text', 'serif'],
      },
      transitionProperty: {
        clip: 'clip-path',
      },
      animation: {
        'fade-in': 'fade-in 5s ease-in-out',
        'fade-out': 'fade-out 5s linear 1s both',
        'slide-from-top': 'slide-from-top 1300ms ease-in-out both',
        'text-focus-in': 'text-focus-in 700ms ease-out both',
        'slide-in-left': 'slide-in-left 1ms ease-out  both',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'slide-from-top': {
          '0%': { clipPath: 'inset(0 0 100% 0)' },
          '100%': { clipPath: 'inset(0)' },
        },
        'text-focus-in': {
          '0%': {
            filter: 'blur(12px)',
            opacity: '0',
          },
          to: {
            filter: 'blur(0)',
            opacity: '1',
          },
        },
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100px)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
