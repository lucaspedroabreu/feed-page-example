/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      tablet: { max: "756px" },
      // => @media (min-width: 640px) { ... }

      laptop: { max: "1024px" },
      // => @media (min-width: 1024px) { ... }

      desktop: { max: "1280px" },
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "spin-slower": "spin 10s linear infinite",
        "pulse-slower": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        ping: {
          "0%, 50%": {
            transform: "scale(1.3)",
          },
          "50%, 75%": {
            transform: "scale(1)",
          },
          "75%, 100%": {
            transform: "scale(1.1)",
          },
        },
      },
    },
  },
  plugins: [],
}
