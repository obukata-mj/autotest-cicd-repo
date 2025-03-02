const { addDynamicIconSelectors } = require('@iconify/tailwind')

module.exports = {
  content: [
    './**/*.{html, js, css}',
    '!./node_modules/**/*'
  ],
  theme: {
    screens: {
      xl: '1701px',
      lg: '1401px',
      pc: '1241px',
      ltb: '1025px',
      md: '961px',
      tb: '769px',
      sm: '601px',
      sp: '415px',
      xs: '375px',
      min: '321px'
    },
    fontFamily: {
      zenkaku: ['Zen Kaku Gothic New', 'serif'],
      kaisei: ['Kaisei Tokumin', 'sans-serif']
    },
    transitionTimingFunction: {
      'in-quad': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
      'in-cubic': 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
      'in-quart': 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
      'in-quint': 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
      'in-sine': 'cubic-bezier(0.470,  0.000, 0.745, 0.715)',
      'in-expo': 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
      'in-circ': 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
      'in-back': 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
      'out-quad': 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
      'out-cubic': 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
      'out-quart': 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
      'out-quint': 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
      'out-sine': 'cubic-bezier(0.390,  0.575, 0.565, 1.000)',
      'out-expo': 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
      'out-circ': 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
      'out-back': 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
      'in-out-quad': 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
      'in-out-cubic': 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
      'in-out-quart': 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
      'in-out-quint': 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
      'in-out-sine': 'cubic-bezier(0.445,  0.050, 0.550, 0.950)',
      'in-out-expo': 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
      'in-out-circ': 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
      'in-out-back': 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
    },
    extend: {
      colors: {
        black: '#333',
        lime: {
          50: '#F4FCE5',
          100: '#E9F7C4',
          200: '#DFF19E',
          300: '#D6E77D',
          400: '#C0D768',
          500: '#A7C155',
          600: '#8EAA46',
          700: '#708C36',
          800: '#576D28',
          900: '#576D28',
          950: '#24300E'
        },
        pdf: '#b30c00',
        excel: '#117e43',
        word: '#1c58bd'
      },
      animation: {
        'slide-in': 'slideIn forwards 500ms ease-out',
        'slide-up': 'slideUp forwards 500ms ease-out'
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: 0, transform: 'translateY(-100%)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' }
        },
        slideUp: {
          '0%': { opacity: 1, transform: 'translateY(0%)' },
          '100%': { opacity: 0, transform: 'translateY(-100%)' }
        }
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.black'),
            '--tw-prose-links': theme('colors.lime[500]')
          }
        }
      })
    }
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')({
      strategy: 'base'
    }),
    require('tailwindcss-font-size')({
      baseSize: 16,
      minSize: 10,
      maxSize: 114
    }),
    addDynamicIconSelectors()
  ]
}
