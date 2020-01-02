import { css } from "@emotion/core"
import { Components } from "@mdx-js/react"
import React from "react"
import SwipingAnchor from "./SwipingAnchor"

type Elm = JSX.IntrinsicElements

export const BlogArticleComponents /*: Required<Components>*/ = {
  h1: (props: Elm["h1"]) => (
    <h1 className="border-b border-gray-600 text-150 mt-4 mb-2" {...props}></h1>
  ),
  h2: (props: Elm["h2"]) => (
    <h2
      className="border-b border-gray-600 font-medium text-120 px-1 pt-2 mt-2 mb-2"
      {...props}
    />
  ),
  h3: (props: Elm["h3"]) => <h3 {...props} />,
  h4: (props: Elm["h4"]) => <h4 {...props} />,
  h5: (props: Elm["h5"]) => <h5 {...props} />,
  h6: (props: Elm["h6"]) => <h6 {...props} />,
  blockquote: (props: Elm["blockquote"]) => <blockquote {...props} />,
  p: (props: Elm["p"]) => <p className="py-1 px-2" {...props} />,
  a: (props: Elm["a"]) => {
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
  strong: (props: Elm["strong"]) => (
    <strong className="text-gray-300" {...props} />
  ),
  ul: (props: Elm["ul"]) => (
    <ul className="list-disc py-1 px-2 pl-8" {...props} />
  ),
  ol: (props: Elm["ol"]) => (
    <ol className="list-decimal py-1 px-2 pl-8" {...props}></ol>
  ),
  code: (props: Elm["code"]) => <code {...props}></code>,
  delete: (props: Elm["del"]) => <del {...props} />,
  em: (props: Elm["em"]) => <em {...props} />,
  hr: (props: Elm["hr"]) => <hr className="my-3 border-gray-600" {...props} />,
  img: (props: Elm["img"]) => <img {...props} />,
}

export default BlogArticleComponents
