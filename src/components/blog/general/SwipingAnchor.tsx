import React from "react"
import { css, keyframes } from "@emotion/core"
import tw from "tailwind.macro"

export const SwipingAnchor: React.FC<{}> = props => (
  <span className="inline-block relative z-0">
    <a
      className="block"
      css={css(tw``, {
        transition: "color .5s ease-in-out",

        color: "inherit",
        textDecoration: "underline #4f6bed 2px",
        "&::before": {
          display: "block",
          content: `""`,
          height: "100%",
          backgroundColor: "#4f6bed00",
          position: "absolute",
          top: 0,
          transition: "background-color 400ms ease-in-out",
          left: 0,
          right: 0,
          zIndex: -1,
          borderRadius: "1px",
        },
        "&:hover": {
          color: "black",
          "&::before": {
            animation: `${anchorWipe} .5s ease-out both`,
            backgroundColor: "#758bf0ff",
          },
        },
      })}
      {...props}
    />
  </span>
)
const anchorWipe = keyframes`
  0% {
    left: 0;
    right: 100%;
  }
  100% {
    left: 0;
    right: 0;
  }
`
export default SwipingAnchor
