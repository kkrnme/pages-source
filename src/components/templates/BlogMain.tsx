import React from "react"
import styled from "@emotion/styled"
import { ss, mq } from "../../styles"

export const BlogMain = styled.main`
  ${ss.letterSpacing}
  ${ss.container}
  ${ss.hidden}
  ${ss.centered}
  border-radius: 0;
  border: none;
  ${ss.transition}
  ${mq[0]}{
    ${ss.rounded}
    ${ss.border}
  }
  &::selection {
    background-color: #00ad5670;
  }
`
