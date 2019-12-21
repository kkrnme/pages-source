import { Components } from "@mdx-js/react"
import React, {
  AllHTMLAttributes,
  Attributes,
  OlHTMLAttributes,
  AnchorHTMLAttributes,
} from "react"
import SwipingAnchor from "./SwipingAnchor"
import { css } from "@emotion/core"

const components: Components = {
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
  a: (props: any) => {
    console.log(props)
    return props.className?.includes(`header-autolink`) ? (
      <a
        {...props}
        className="bg-monochrome-e rounded-full hover:bg-blue-400 transition mr-1"
        css={css`
          svg {
            display: inline;
          }
        `}
      />
    ) : (
      <SwipingAnchor to={props.href} {...props} />
    )
  },
  ul: (props: any) => <ul className="list-disc py-1 px-2 pl-8" {...props} />,
  ol: (props: any) => (
    <ol className="list-decimal py-1 px-2 pl-8" {...props}></ol>
  ),
}

export default components
