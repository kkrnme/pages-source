import React from "react"
import GeoPattern from "geopattern"
import PrevNextLink from "./PrevNextLink"
import { MdxEdge } from "../../../types/graphqlTypes"
import { css } from "@emotion/core"
import tw from "tailwind.macro"
import { TagComponent } from "./tags/TagComponent"
import { TagsDefinition } from "./tags/TagsDefinition"

export const BlogPostHead: React.FC<ArticleHeadProps> = ({ post }) => (
  <div>
    <div
      className="relative"
      css={css`
        min-height: 7rem;
        z-index: 0;
        &::before {
          background-image: ${GeoPattern.generate(
            post.node.frontmatter?.title!
          ).toDataUrl()};
          background-size: cover;
          filter: saturate(180%);
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
          z-index: -1;
        }
      `}
    >
      <h1 className="w-full text-white px-2 py-1 text-shadow">
        <span className="text-200">{post.node.frontmatter?.title}</span>
      </h1>
    </div>
    {post.node.frontmatter?.tags?.map(v => (
      <TagComponent
        key={v!}
        children={v!}
        css={css`
          background-color: ${TagsDefinition[v!]};
        `}
      />
    ))}
    <table>
      <tbody>
        <tr>
          <th>DATE</th>
          <td>{post.node.frontmatter?.date}</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export interface ArticleHeadProps {
  post: MdxEdge
}

export default BlogPostHead
