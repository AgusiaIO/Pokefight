/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svg}"],
  theme: {
    extend: {
      colors: {
        // Dark
        dark_bg: "#101010",
        dark_text: "#ddd",
        dark_textHover: "#eee",
        dark_card: "#151515",
        dark_cardBorder: "#222",
        // Light
      },
      // keyframes: {
      //   toLeft: {
      //     "0%, 100%": { transform: "translateX(0)" },
      //     "50%": { transform: "translateX(200%)" },
      //   },
      // },
      // animation: {
      //   toLeft: "toLeft 1s both",
      // },
    },
    container: {
      center: true,
    },
    minHeight: {
      screen: "100svh",
    },
  },
  plugins: [],
};
