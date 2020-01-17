import { css } from "@emotion/core"
import GeoPattern from "geopattern"
import React from "react"
import { MdxEdge } from "../../../types/graphqlTypes"
import { TagComponent, TagLink } from "./tags/TagComponent"

export const BlogPostHead: React.FC<BlogPostHeadProps> = ({ post }) => (
  <div>
    <div
      css={css`
        min-height: 7rem;
        z-index: 0;
        background-image: ${GeoPattern.generate(
          post.node.frontmatter?.title!
        ).toDataUrl()};
        background-size: cover;
        filter: saturate(180%);
        content: "";
        height: 100%;
        width: 100%;
        background-attachment: fixed;
      `}
    >
      <h1 className="w-full text-white px-2 py-1 text-shadow">
        <span className="text-200">{post.node.frontmatter?.title}</span>
      </h1>
    </div>
    {post.node.frontmatter?.tags?.map(v => (
      <TagLink key={v!}>{v!}</TagLink>
    ))}
    <TagComponent className="bg-teal-500">
      {post.node.frontmatter?.date}
    </TagComponent>
  </div>
)

export type BlogPostHeadProps = {
  post: MdxEdge
}

export default BlogPostHead
