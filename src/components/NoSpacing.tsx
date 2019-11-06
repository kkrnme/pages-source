import React, { ReactNode } from "react"

export default ({ children, lang }: { children: ReactNode; lang: string }) => (
  <span
    lang={lang}
    style={{
      letterSpacing: `0`,
    }}
  >
    {children}
  </span>
)
