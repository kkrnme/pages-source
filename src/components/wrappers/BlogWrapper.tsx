import React from "react"
import Wrapper_Root from "./Wrapper_Root"

export default ({ children }: { children: React.ReactNode }) => (
  <Wrapper_Root
    styles={{
      main: {
        textAlign: `left`, //これ消すとcenterからのページ遷移で死ぬ。舐めてんのか
      },
      article: {
        "h1, h2, h3, h4, h5, h6, strong": {
          color: `#fff`,
        },
      },
      h1: {
        fontSize: `160%`,
        borderBottom: `1px solid #ddd`,
      },
    }}
  >
    {children}
  </Wrapper_Root>
)
