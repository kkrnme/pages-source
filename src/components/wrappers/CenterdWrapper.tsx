import React from "react"
import Wrapper_Root from "./Wrapper_Root"

export default ({ children }: { children: React.ReactNode }) => (
  <Wrapper_Root
    styles={{
      main: {
        textAlign: `center`,
      },
      article: {},
      h1: {
        fontSize: `200%`,
        borderBottom: `1px solid #ddd`,
      },
    }}
  >
    {children}
  </Wrapper_Root>
)
