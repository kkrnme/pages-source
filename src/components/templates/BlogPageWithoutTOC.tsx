import { Meta } from "./templates"
import React from "react"
import { BlogMain } from "./BlogMain"
import { BlogPage } from "./BlogPage"

export const BlogPageWithoutTOC: React.FC<Meta> = props => (
  <BlogPage
    {...props}
    BlogWrapper={({ children }) => (
      <BlogMain className="mx-auto sm:my-2 my-0">{children}</BlogMain>
    )}
  ></BlogPage>
)
