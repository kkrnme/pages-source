import { css } from "@emotion/core"
import { Components } from "@mdx-js/react"
import React from "react"
import SwipingAnchor from "./SwipingAnchor"

export const BlogArticleComponents /*: Required<Components>*/ = {
  h1: (props: JSX.IntrinsicElements["h1"]) => (
    <h1 className="border-b border-fluentGray-70 text-150 mt-4" {...props}></h1>
  ),
  h2: (props: JSX.IntrinsicElements["h2"]) => (
    <h2
      className="border-b border-fluentGray-70 font-medium text-120 px-1 pt-2"
      {...props}
    />
  ),
  h3: (props: JSX.IntrinsicElements["h3"]) => <h3 {...props} />,
  h4: (props: JSX.IntrinsicElements["h4"]) => <h4 {...props} />,
  h5: (props: JSX.IntrinsicElements["h5"]) => <h5 {...props} />,
  h6: (props: JSX.IntrinsicElements["h6"]) => <h6 {...props} />,
  blockquote: (props: JSX.IntrinsicElements["blockquote"]) => (
    <blockquote {...props} />
  ),
  p: (props: JSX.IntrinsicElements["p"]) => (
    <p className="py-1 px-2" {...props} />
  ),
  a: (props: JSX.IntrinsicElements["a"]) => {
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
      <SwipingAnchor to={props.href!} {...props} />
    )
  },
  strong: (props: JSX.IntrinsicElements["strong"]) => (
    <strong className="text-gray-300" {...props}/>
  ),
  ul: (props: any) => <ul className="list-disc py-1 px-2 pl-8" {...props} />,
  ol: (props: any) => (
    <ol className="list-decimal py-1 px-2 pl-8" {...props}></ol>
  ),
}

export default BlogArticleComponents
