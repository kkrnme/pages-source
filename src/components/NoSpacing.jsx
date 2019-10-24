import React from "react"

export default ({ children, lang }) => (
  <span
    lang={lang}
    style={{
      letterSpacing: `0`,
    }}
  >
    {children}
  </span>
)
