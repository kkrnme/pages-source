export const theme = {
  fontSize: {
    20: "0.2rem",
    25: "0.25rem",
    50: "0.5rem",
    75: "0.75rem",
    100: "1rem", //20px
    120: "1.2rem", //24
    150: "1.5rem",
    200: "2rem",
    250: "2.5rem",
    300: "3rem",
    400: "4rem",
  },
  letterSpacing: {
    "09": "0.09em",
    none: "0",
  },
  extend: {
    colors: require("./theme-colors").themeColors,
    maxWidth: {
      "1000px": "1000px",
    },
    opacity: {
      60: ".6",
      80: ".8",
      90: ".9",
    },
  },
}
