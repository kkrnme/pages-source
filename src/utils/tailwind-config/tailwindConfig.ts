export const tailwindConfig = {
  theme: require("./theme").theme,
  variants: {},
  plugins: [
    ({ addBase, addUtilities, config }: any) => {
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
