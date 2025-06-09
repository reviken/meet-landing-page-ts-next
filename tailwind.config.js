/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        tablet: "768px",
        desktop: "1440px",
      },
      colors: {
        cyan: {
          600: '#4d96a9',
          300: '#8fe3f9',
        },
        purple: {
          600: '#855fb1',
          300: '#d9b8ff',
        },
        slate: {
          900: '#28283d',
          600: '#87879d',
          300: '#d1d1df',
        },
        white: '#fafafa',
      },
      spacing: {
        50: "4px",
        100: "8px",
        200: "16px",
        300: "24px",
        400: "32px",
        500: "40px",
        700: "56px",
        800: "64px",
        900: "72px",
        1000: "80px",
        1400: "112px",
      },
      borderRadius: {
        400: "32px",
      },
      fontFamily: {
        'red-hat': ['"Red Hat Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;