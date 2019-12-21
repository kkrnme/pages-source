import React from "react"
import GeoPattern from "geopattern"
import PrevNextLink from "./PrevNextLink"
import { MdxEdge } from "../../../types/graphqlTypes"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

export const BlogPostHead: React.FC<ArticleHeadProps> = ({ post }) => (
  <div
    className="bg-red-400 bg-fixed"
    css={css`
      background-image: ${GeoPattern.generate(
        post.node.frontmatter?.title!
      ).toDataUrl()};
      background-size: contain;
      background-blend-mode: luminosity;
    `}
  >
    <h1 className="flex justify-between w-full flex-wrap text-white px-2 py-1 text-shadow">
      <span className="text-200">{post.node.frontmatter?.title}</span>
      <span className="self-end font-normal flex-grow text-right text-150">
        {post.node.frontmatter?.date}
      </span>
    </h1>
    <PrevNextLink post={post} />
  </div>
)

export interface ArticleHeadProps {
  post: MdxEdge
}

export default BlogPostHead
