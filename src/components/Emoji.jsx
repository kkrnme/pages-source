import React from "react"
import Twemoji from "react-twemoji"

export default ({ children }) => (
  <Twemoji noWrapper>
    <span
      css={{
        img: {
          height: `1.2em`,
          transform: `translateY(0.2em)`,
          transition: `300ms all cubic-bezier(.68,-0.55,.27,1.55)`,
          "&:hover": {
            transform: `translateY(0.2em) scale(2)`
          }
        },
      }}
    >
      {children}
    </span>
  </Twemoji>
)
