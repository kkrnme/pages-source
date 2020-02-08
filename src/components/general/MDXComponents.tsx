import { css } from "@emotion/core"
import { Components } from "@mdx-js/react"
import React from "react"
import SwipingAnchor from "./SwipingAnchor"
import { DeepReadonly } from "ts-essentials"
import styled from "@emotion/styled"
import { cs } from "../../styles"

type Elm = JSX.IntrinsicElements

export const MDXComponents: DeepReadonly<Required<Components>> = {
  h1: styled.h1`
    border-bottom: 1px solid ${cs.border};
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  `,
  h2: styled.h2`
    border-bottom: 1px solid ${cs.border};
    font-weight: medium;
    font-size: 1.2rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    padding-top: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  `,
  h3: styled.h3``,
  h4: styled.h4``,
  h5: styled.h5``,
  h6: styled.h6``,
  blockquote: styled.blockquote``,
  p: styled.p`
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  `,
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
  strong: styled.strong``,
  ul: (props: Elm["ul"]) => (
    <ul className="list-disc py-1 px-2 pl-8" {...props} />
  ),
  ol: (props: Elm["ol"]) => (
    <ol className="list-decimal py-1 px-2 pl-8" {...props}></ol>
  ),
  code: (props: Elm["code"]) => <code {...props}></code>,
  delete: styled.del``,
  em: styled.em``,
  hr: styled.hr`
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    border: 1px solid ${cs.border};
  `,
  img: styled.img``,
  inlineCode: styled.code``,
  li: styled.li``,
  pre: styled.pre``,
  thematicBreak: styled.br``,
  tr: styled.tr``,
  table: styled.table``,
  td: styled.td``,
}

export default MDXComponents
