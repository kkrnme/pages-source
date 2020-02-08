import { Meta } from "./templates"

import { PrimitiveBackground } from "./PrimitiveBackground"

import React from "react"
import styled from "@emotion/styled"
import { cs } from "../../styles/"

/**
 * Background
 * @param props
 */
export const GrayBackground = styled(PrimitiveBackground)`
  background-color: ${cs.background};
  color: ${cs.text};
`
