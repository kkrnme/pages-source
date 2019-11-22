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
      "2xl": "2.25rem",
      "3xl": "3rem",
      "4xl": "4rem",
    },
    letterSpacing: {
      "09": "0.09em"
    },
    extend: {
      colors: {
        gatsbyPurple: {
          "50": `#8a4baf`,
          "60": "#663399",
          "80": `#452475`,
          "90": `#362066`,
        },
        gatsbyBlack: `#131217`,
        react: `#61dafb`,
        reactBlack: `#20232a`,
        reactShadow: `#282c34`,
        graphqlBlack: `#171e26`,
        graphqlDarkWash: `#3d464f`,
        body: "#fafafa",
      },
    },
  },
  variants: {},
  plugins: [
    ({addUtilities}) => addUtilities({
      ".emoji":{
        display: `inline`,
        verticalAlign: `baseline`,
        height: `1.2em`,
        transform: `translateY(0.2em)`,
        transition: `300ms all cubic-bezier(.68,-0.55,.27,1.55)`,
        "&:hover": {
          transform: `translateY(0.2em) scale(2)`,
        },
      },
    })
  ],
}
