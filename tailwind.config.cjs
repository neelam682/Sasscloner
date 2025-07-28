/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueCustom: '#3b82f6',
        blueCustomDark: '#2563eb',  // darker blue for hover
        blueCustomActive: '#1d4ed8', // darkest blue for active
        grayDisabled: '#9ca3af',
        grayDisabledBg: '#d1d5db',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.btn-primary': {
          padding: '0.65rem 1.5rem',
          borderRadius: '0.475rem',
          borderWidth: '1.5px',
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(0,0,0,0.15)',
          color: '#93c5fd',
          fontWeight: '600',
          fontSize: '0.875rem',
          backdropFilter: 'blur(6px)',
          boxShadow: 'inset 0 0 15px 4px rgba(59,130,246,0.6), 0 4px 15px rgba(59,130,246,0.4)',
          transitionProperty: 'box-shadow',
          transitionDuration: '200ms',
          cursor: 'pointer',

          '&:hover': {
            boxShadow: 'inset 0 0 20px 6px rgba(59,130,246,0.8), 0 6px 20px rgba(59,130,246,0.6)',
          },
          '&:active': {
            boxShadow: 'inset 0 0 12px 5px rgba(59,130,246,0.7)',
          },
          '&:focus-visible': {
            outline: 'none',
            ringWidth: '2px',
            ringOffsetWidth: '2px',
            ringColor: '#3b82f6',
            boxShadow: '0 0 0 3px rgba(59,130,246,0.5)',
          }
        },

        '.btn-secondary': {
          padding: '0.75rem 1.5rem',
          borderRadius: '0.375rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          fontWeight: '600',
          fontSize: '0.875rem',
          cursor: 'pointer',
          transitionProperty: 'background-color, box-shadow',
          transitionDuration: '200ms',

          '&:hover': {
            backgroundColor: '#2563eb',
          },
          '&:active': {
            backgroundColor: '#1d4ed8',
          },
          '&:disabled': {
            backgroundColor: '#d1d5db',
            color: '#9ca3af',
            cursor: 'not-allowed',
            boxShadow: 'none',
            pointerEvents: 'none',
          },
          '&:focus-visible': {
            outline: 'none',
            ringWidth: '2px',
            ringOffsetWidth: '2px',
            ringColor: '#2563eb',
            boxShadow: '0 0 0 3px rgba(37,99,235,0.5)',
          }
        }
      })
    }
  ],
}
