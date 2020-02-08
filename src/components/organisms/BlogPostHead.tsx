import GeoPattern from "geopattern"
import React from "react"
import { TagComponent, TagLink } from "../atoms/TagComponent"
import { PlainComponent } from "../../utils/PlainComponent"
import styled from "@emotion/styled"
import { ds, ss } from "../../styles"
import { DeepReadonly } from "ts-essentials"

export type BlogPostHeadProps = DeepReadonly<{
  post: {
    node: {
      frontmatter?: {
        title: string
        tags: string[]
        date: any
      }
    }
  }
}>

export const Plain: PlainComponent<BlogPostHeadProps> = ({
  post,
  className,
}) => (
  <div className={className}>
    <div>
      <h1>
        <span>{post.node.frontmatter?.title}</span>
      </h1>
    </div>
    {post.node.frontmatter?.tags?.map(v => (
      <TagLink key={v!}>{v!}</TagLink>
    ))}
    <TagComponent>{post.node.frontmatter?.date}</TagComponent>
  </div>
)

const Styled = styled(Plain)`
  div {
    min-height: 7rem;
    z-index: 0;
    background-image: ${(props: BlogPostHeadProps) =>
      GeoPattern.generate(props.post.node.frontmatter?.title!).toDataUrl()};
    background-size: cover;
    filter: saturate(180%);
    content: "";
    height: 100%;
    width: 100%;
    background-attachment: fixed;
    h1 {
      width: 100%;
      color: white;
      padding: 0.5rem 0.25rem;
      ${ss.textShadow}
      span {
        font-size: 2rem;
      }
    }
    ${TagComponent} {
      background-color: #38b2ac;
    }
  }
`

export default Styled
