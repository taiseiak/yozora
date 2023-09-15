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
        fadeIn: 'fadeIn 5s ease-in-out',
        fadeOut: 'fadeOut 5s linear 1s both',
        slideFromTop: 'slideFromTop 1300ms ease-in-out both',
        textFocusIn: 'textFocusIn 500ms cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        slideFromTop: {
          '0%': { clipPath: 'inset(0 0 100% 0)' },
          '100%': { clipPath: 'inset(0)' },
        },
        textFocusIn: {
          '0%': {
            filter: 'blur(12px)',
            opacity: '0',
          },
          to: {
            filter: 'blur(0)',
            opacity: '1',
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
