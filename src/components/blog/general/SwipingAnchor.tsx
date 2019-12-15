import React from "react"
import { css, keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

export const SwipingAnchor: React.FC<{}> = props => (
  <span className="inline-block relative z-0">
    <a
      className="underline-anchor"
      css={css`
        &::before {
          display: block;
          content: "";
          height: 100%;
          background-color: ${tw``};
          position: absolute;
          top: 0;
          transition: background-color 0.4s ease-in-out;
          left: 0;
          right: 0;
          z-index: -1;
          border-radius: 1px;
        }
        &:hover {
          color: black;
          &::before {
            animation: ${anchorWipe} 0.5s ease-out both;
            background-color: #758bf0ff;
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
