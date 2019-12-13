"use strict"
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
    extend: {
      colors: {
        body: "#fafafa",
        adoc: "#E40046",
        mdx: "#F9AC00",
        fluentMagentaPink: {
          10: `#e3008c`,
        },
        fluentRed: {
          10: `#d13438`,
        },
        fluentBlue: {
          10: `#4f6bed`,
        },
        fluentGreenCyan: {
          10: `#00ad56`,
        },
        fluentOrange: {
          10: `#ffaa44`,
        },
        fluentGray: {
          10: `#faf9f8`,
          20: `#f3f2f1`,
          30: `#edebe9`,
          40: `#e1dfdd`,
          50: `#d2d0ce`,
          70: `#bebbb8`,
          90: `#a19f9d`,
          100: `#979593`,
          120: `#797775`,
          140: `#484644`,
          160: "#323130",
          180: `#252423`,
        },
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
      },
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
          display: `inline`,
          verticalAlign: `baseline`,
          height: `1.2em`,
          transform: `translateY(0.2em)`,
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
          textDecoration: "underline solid",
          textDecorationColor: "#4f6beda0",
          textDecorationThickness: ".1em",
          transition: `150ms all ease-in`,
          "&:hover": {
            textDecoration: "underline",
            textDecorationColor: "#4f6bedff",
            textDecorationThickness: ".2em",
          },
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
      })
    },
  ],
}
