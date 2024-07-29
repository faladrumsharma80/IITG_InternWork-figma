/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        floralwhite: "#fffbf2",
        black: "#000",
        white: "#fff",
        gray: {
          "100": "#848484",
          "200": "#7e7e7e",
          "300": "#121212",
        },
        dimgray: "rgba(91, 91, 91, 0.63)",
        gold: "#ffe607",
      },
      spacing: {},
      fontFamily: {
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        inherit: "inherit",
        "inria-serif": "'Inria Serif'",
        inter: "Inter",
        katibeh: "Katibeh",
        "inria-sans": "'Inria Sans'",
        "inknut-antiqua": "'Inknut Antiqua'",
      },
      borderRadius: {
        mini: "15px",
        "9xl": "28px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      base: "16px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      xl: "20px",
      "13xl": "32px",
      "7xl": "26px",
      "29xl": "48px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
