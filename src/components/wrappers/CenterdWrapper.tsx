import React from "react"
import Wrapper_Root from "./Wrapper_Root"

export default ({ children }: { children: React.ReactNode }) => (
  <div>
    <Wrapper_Root
      styles={{
        main: {
          textAlign: `center`,
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
      }}
    >
      {children}
    </Wrapper_Root>
  </div>
)
