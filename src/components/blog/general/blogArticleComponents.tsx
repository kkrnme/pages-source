import React from "react"
import { css, keyframes } from "@emotion/core"
import { Info } from "../Notes"
import tw from "tailwind.macro"
import SwipingAnchor from "./SwipingAnchor"

const components = {
  h1: (props: any) => (
    <h1 className="border-b border-fluentGray-70 text-150 mt-4" {...props}></h1>
  ),
  h2: (props: any) => (
    <h2
      className="border-b border-fluentGray-70 font-medium text-120 px-1 pt-2"
      {...props}
    />
  ),
  p: (props: any) => <p className="py-1 px-2" {...props} />,
  a: (props: any) => <SwipingAnchor {...props} />,
  ul: (props: any) => <ul className="list-disc py-1 px-2 pl-8" {...props} />,
}

export default components
