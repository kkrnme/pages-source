const colors = {
  black: "#000",
  white: "#fff",
  monochrome: {
    1: `#111`,
    2: `#222`,
    3: `#333`,
    4: `#444`,
    5: `#555`,
    6: `#666`,
    7: `#777`,
    8: `#888`,
    9: `#999`,
    a: `#aaa`,
    b: `#bbb`,
    c: `#ccc`,
    d: `#ddd`,
    e: `#eee`,
  },
  red: `hsl(0, 90%, 75%)`,
  orange: `hsl(30, 90%, 67%)`,
  yellow: `hsl(60, 90%, 67%)`,
  greenapple: `hsl(75, 90%, 67%)`,
  green: `hsl(90, 90%, 70%)`,
  blue: `hsl(210, 90%, 70%)`,
  ultramarine: `hsl(230, 90%, 75%)`,
  purple: `hsl(270, 90%, 70%)`,
  transparentBlack: {
    1: `#0001`,
    2: `#0002`,
    3: `#0003`,
    4: `#0004`,
    5: `#0005`,
    6: `#0006`,
    7: `#0007`,
    8: `#0008`,
    9: `#0009`,
    a: `#000a`,
    b: `#000b`,
    c: `#000c`,
    d: `#000d`,
    e: `#000e`,
  },
}
module.exports = {
  theme: {
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
    colors,
    extend: {
      maxWidth: {
        "1000px": "1000px",
      },
      opacity: {
        60: ".6",
        80: ".8",
        90: ".9",
      },
    },
  },
  variants: {},
  plugins: [
    ({ addBase, addUtilities, config }) => {
      addBase({
        ":root": {
          fontSize: "inherit",
          scrollbarColor: "#00ad56 #f3f2f1",
          "@media (min-width: 640px)": {
            //sm
            fontSize: "20px",
          },
        },
      })
      addUtilities({
        ".emoji": {
          display: "inline",
          verticalAlign: "baseline",
          height: "1.2em",
          transform: "translateY(0.2em)",
        },
        ".label-adoc": {
          backgroundColor: `#d13438`,
          color: "white",
        },
        ".label-mdx": {
          backgroundColor: `#ffaa44`,
          color: "black",
        },
        ".transition": {
          transition: `150ms all ease-in`,
        },
        ".underline-anchor": {
          textDecoration: `underline ${colors.blue}`,
          textDecorationThickness: "2px",
        },
        ".selection-green": {
          "::selection": {
            backgroundColor: "#00ad5670",
          },
        },
        ".backdrop-blur": {
          backdropFilter: `blur(1px)`,
        },
        ".backdrop-blur-xl": {
          backdropFilter: `blur(100%)`,
        },
        ".hyphens": {
          hyphens: `auto`,
        },
        ".text-shadow": {
          textShadow: `#0008 2px 2px 3px`,
        },
      })
    },
  ],
}
