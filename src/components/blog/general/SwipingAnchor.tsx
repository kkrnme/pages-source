import React from "react"
import { css, keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

export const SwipingAnchor: React.FC<{}> = props => (
  <span className="inline-block relative z-0">
    <a
      className="underline-anchor"
      css={css`
        color: inherit;
        transition: all 0.4s ease-in-out;
        &::before {
          display: block;
          content: "";
          height: 100%;
          ${tw`bg-blue`};
          position: absolute;
          transition: all 0.4s ease-in-out;
          top: 0;
          left: 0;
          right: 100%;
          z-index: -1;
          border-radius: 1px;
        }
        &:hover {
          color: black;
          &::before {
            left: 0;
            right: 0;
          }
        }
      `}
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
