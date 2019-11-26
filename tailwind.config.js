module.exports = {
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      xs: "1rem",
      sm: "1.125rem",
      base: "1.25rem",
      lg: "1.5rem",
      xl: "1.875rem",
      "2xl": "2rem",
      "2.5xl": "2.5rem",
      "3xl": "3rem",
      "4xl": "4rem",
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
        fluentGreenCyan: {
          10: `#00ad56`,
        },
        fluentGray: {
          10: `#faf9f8`,
          30: `#edebe9`,
          40: `#e1dfdd`,
          50: `#d2d0ce`,
          70: `#bebbb8`,
          90: `#a19f9d`,
          100: `#979593`,
          180: `#252423`,
        },
      },
    },
    letterSpacing: {
      "09": "0.09em",
      none: "0",
    },
  },
  variants: {},
  plugins: [
    ({ addUtilities }) =>
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
      }),
  ],
}
