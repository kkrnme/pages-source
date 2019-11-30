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
      },
      maxWidth: {
        "1000px": "1000px",
      },
    },
    letterSpacing: {
      "09": "0.09em",
      none: "0",
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
          transition: `300ms all cubic-bezier(.68,-0.55,.27,1.55)`,
          "&:hover": {
            transform: `translateY(0.2em) scale(2)`,
          },
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
      })
    },
  ],
}
