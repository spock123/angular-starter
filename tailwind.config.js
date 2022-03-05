module.exports = {
  important: true,
  prefix: "",
  content: ["./src/**/*.{html,ts, scss, txs, vue,}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1380px",
        "2xl": "1536px",
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#E0F2FF",
          100: "#BDE3FF",
          200: "#7AC8FF",
          300: "#38ACFF",
          400: "#008FF5",
          500: "#0068B4",
          600: "#00538F",
          700: "#003E6B",
          800: "#002A47",
          900: "#001524",
          /*
          50: '#e7f0f9',
          100: '#c2daf0',
          200: '#99c2e6',
          300: '#70aadb',
          400: '#5297d4',
          500: '#3385cc',
          600: '#2e7dc7',
          700: '#2772c0',
          800: '#2068b9',
          900: '#1455ad'
          */
        },
        accent: {
          50: "#E5F5E6",
          100: "#CFEDD0",
          200: "#9ADA9E",
          300: "#6AC86F",
          400: "#40AF46",
          500: "#2E7D32",
          600: "#256528",
          700: "#1B4B1E",
          800: "#123013",
          900: "#0A1A0A",
          /*
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B'
          */
        },
        "gray-100": "#f4f4f4",
        warn: {
          light: "#F44336",
          dark: "#D32F2F",
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
        "spin-limited": "spin 1s linear 1",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up-long": {
          "0%": {
            opacity: "0",
            transform: "translateY(200px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
      //  appearance: ['hover', 'focus']
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
