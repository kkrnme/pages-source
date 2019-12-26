import { Meta } from "./templates"

import { PrimitiveBackground } from "./PrimitiveBackground"

import React from "react"

/**
 * Background
 * @param props
 */
export const GrayBackground: React.FC<Meta> = props => (
  <PrimitiveBackground
    {...props}
    className="bg-gray-900 text-gray-400"
  ></PrimitiveBackground>
)
