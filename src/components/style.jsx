import React from "react"
import { Global } from "@emotion/core"

export const BlogStyle = () => (
  <Global
    styles={{
      body: {
        backgroundColor: `#111`,
        margin: 0,
      },
      article: {
        "h1, h2, h3, h4, h5, h6, strong": {
          color: `#fff`,
        },
      },
      h1: {
        fontSize: `200%`,
        borderBottom: `1px solid #ddd`,
      },
      a: {
        color: `#088`,
      },
    }}
  ></Global>
)

export const TopStyle = () => (
  <Global
    styles={{
      body: {
        backgroundColor: `#111`,
        margin: 0,
      },
      article: {
        "h1, h2, h3, h4, h5, h6, strong": {
          color: `#fff`,
        },
      },
      h1: {
        fontSize: `200%`,
        borderBottom: `1px solid #ddd`,
      },
      a: {
        color: `#088`,
      },
    }}
  ></Global>
)

export const Main = ({ children }) => (
  <main
    css={{
      backgroundColor: `#202020`,
      color: `#ddd`,
      margin: `8px auto`,
      padding: `8px`,
      width: `90%`,
      maxWidth: `800px`,
      "& *::selection": {
        backgroundColor: `#40ffff60`,
        color: `#fff`,
      },
    }}
  >
    {children}
  </main>
)
