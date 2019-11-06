import React from "react"
import { Global, InterpolationWithTheme } from "@emotion/core"
import LogoScript from "../logo-script.svg"
import _ from "lodash"

export default ({ styles }: { styles: InterpolationWithTheme<any> }) => (
  <Global styles={_.merge(SharedGlobalStyle, styles)} />
)

const SharedGlobalStyle: InterpolationWithTheme<any> = {
  body: {
    margin: 0,
    fontFamily: `"Noto Sans","Noto Sans CJK JP",sans-serif`,
    fontSize: `20px`,
    background: `url('${LogoScript}') fixed center/contain no-repeat #111`,
  },
  main: {
    backgroundColor: `#202020a0`,
    borderRadius: `5px`,
    color: `#ddd`,
    letterSpacing: `0.09rem`,
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
  "img.emoji": {
    height: `1.2em`,
    transform: `translateY(0.2em)`,
    transition: `300ms all cubic-bezier(.68,-0.55,.27,1.55)`,
    "&:hover": {
      transform: `translateY(0.2em) scale(2)`,
    },
  },
}
