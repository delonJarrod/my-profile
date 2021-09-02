module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
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
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateX(0px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0px)",
          },
        },
        reverse: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg),",
          },
        },
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
        "fade-in-down": "fade-in-down 0.5s ease-in-out",
        fadeIn: "fadeIn 0.5s ease-in-out",
        reverse: "reverse spin 4s linear infinite",
      },
      fontFamily: {
        Nunito: ["Nunito"],
      },
    },
  },
  variants: {
    extend: { animation: ["motion-safe"] },
  },
  plugins: [],
};
