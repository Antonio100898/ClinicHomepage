module.exports = {
  // mode: 'jit',
  // // These paths are just examples, customize them to match your project structure
  // purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: {'max': '1023px'},
      lg: '1024px'
    },
    colors: {
      dark: 'black',
      light: 'white',
      primary: '#01559A',
      accent: '#D25C78',
      red: '#D25C78',
    },
    fontFamily: {
      body: ['"Assistant"', 'sans-serif'],
      display: ['"Assistant"', 'sans-serif'],
      sans: ['"Assistant"', 'sans-serif'],
      serif: ['"Assistant"', 'sans-serif'],
      mono: ['"Assistant"', 'sans-serif'],
    },
    extend: {
      colors: {
        'header-blue': '#4E47F9',
        'contact-bg': '#F4F3FD',
        'icon-bg': '#4E47F9',
        success: '#7AD17C',
        red: '#D25C78',
        blue: '#4E47F9',
        'brown-bg': '#E5E5E5',
        azure: '#E2F7F9',
      },
      text: {
        medium: 'md:text-xl',
        large: 'lg:text-2xl',
      },
      boxShadow: {
        '4xl': '0px 0px 4px rgba(0,0,0,0.25)',
      },
      height: { header: '95px' },
      minHeight: {
        'screen-50': '50vh',
      },
      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr',
        'auto-1fr-auto': 'auto 1fr auto',
        'auto-auto-1fr': 'auto auto 1fr',
        '2-auto': 'auto auto',
        '4-auto': 'auto auto auto auto',
        '4-auto-1fr': 'auto auto auto auto 1fr',
      },

      gridTemplateRows: {
        '1fr': '1fr',
        'auto-1fr': 'auto 1fr',
      },
      zIndex: {
        'bg': '-1'
      }
    },
    fontSize: {
      xs: '16px',
      s: '18px',
      medium: '22px',
      lg: '28px',
      xl: '42px',
      '2xl': '52px',
      '3xl': '82px',
    },
  },
  plugins: [],
}
