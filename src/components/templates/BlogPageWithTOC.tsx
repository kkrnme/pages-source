import { Meta } from "./templates"
import { TOC, TableOfContents } from "../general/TableOfContents"
import React from "react"
import { BlogMain } from "./BlogMain"
import { css } from "@emotion/core"
import { BlogPage } from "./BlogPage"

export const BlogPageWithTOC: React.FC<Meta & {
  TOC: TOC
  visible: boolean
}> = props => (
  <BlogPage
    {...props}
    BlogWrapper={({ children }) => (
      <div className="block md:flex sm:my-2 my-0 justify-between">
        <BlogMain className={"lg:ml-auto lg:mr-2 lg:max-w-768px"}>
          {children}
        </BlogMain>
        {!props.visible ? (
          <TableOfContents
            TOC={props.TOC}
            className="mx-auto lg:mr-auto ml-2 h-full max-w-235px sticky"
            css={css`
              top: 0.5rem;
            `}
          />
        ) : null}
      </div>
    )}
  ></BlogPage>
)
