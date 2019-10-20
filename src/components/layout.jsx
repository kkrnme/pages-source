import React from "react"
import { Global } from "@emotion/core"

export default ({ children }) => (
  <div>
    <Global
      styles={{
        body: {
          backgroundColor: `#202020`,
          color: `#ddd`,
          fontSize: `4vw`,
          textAlign: `center`,
        },
        h1: {
          color: `#fafafa`,
        },
      }}
    />
    {children}
  </div>
)
