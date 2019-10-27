import React from "react"
import { Global } from "@emotion/core"
import kokoronome from "./kokoronome.svg"

export const BlogStyle = () => (
  <SharedGlobalStyle
    styles={{
      article: {
        "h1, h2, h3, h4, h5, h6, strong": {
          color: `#fff`,
        },
      },
      h1: {
        fontSize: `200%`,
        borderBottom: `1px solid #ddd`,
      },
    }}
  />
)

export const TopStyle = () => (
  <SharedGlobalStyle
    styles={{
      article: {
        "h1, h2, h3, h4, h5, h6, strong": {
          color: `#fff`,
        },
      },
      h1: {
        fontSize: `200%`,
        borderBottom: `1px solid #ddd`,
      },
    }}
  />
)

const SharedGlobalStyle = ({ styles }) => (
  <Global
    styles={Object.assign(
      {
        body: {
          margin: 0,
          fontFamily: `"Noto Sans","Noto Sans CJK JP",sans-serif`,
          fontSize: `20px`,
          background: `url('${kokoronome}') fixed center/contain no-repeat #111`,
        },
        main: {
          backgroundColor: `#202020a0`,
          borderRadius: `5px`,
          color: `#ddd`,
          letterSpacing: `0.05rem`,
          margin: `8px auto`,
          padding: `8px`,
          width: `90%`,
          maxWidth: `800px`,
          backdropFilter: `blur(12px)`,
          transition: `300ms all ease-in`,
          "& *::selection": {
            backgroundColor: `#40ffff60`,
            color: `#fff`,
          },
          a: {
            color: `#088`,
          },
        },
        pre: {
          backgroundColor: `#1e1e1e`,
          //mixBlendMode: `darken`,
          border: `1px solid #ddd5`,
          borderRadius: `2px`,
          fontFamily: `monospace`,
          letterSpacing: `0`,
          padding: `2px`,
        },
        ".emoji": {
          height: `1.2em`,
          transform: `translateY(0.2em)`,
        },
      },
      styles
    )}
  />
)
