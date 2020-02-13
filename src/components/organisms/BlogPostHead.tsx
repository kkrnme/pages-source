import GeoPattern from "geopattern"
import React from "react"
import { TagComponent, TagLink } from "../atoms/TagComponent"
import { PlainComponent } from "../../utils/PlainComponent"
import styled from "@emotion/styled"
import { ds, ss } from "../../styles"
import { DeepReadonly } from "ts-essentials"
import { Post } from "../../utils/Post"

export type BlogPostHeadProps = DeepReadonly<{
  post: Pick<Post, "tags" | "title" | "date">
}>

export const Plain: PlainComponent<BlogPostHeadProps> = ({
  post: { date, tags, title },
  className,
}) => (
  <div className={className}>
    <div>
      <h1>
        <span>{title}</span>
      </h1>
    </div>
    {tags.map(v => (
      <TagLink key={v!}>{v!}</TagLink>
    ))}
    <TagComponent>{date}</TagComponent>
  </div>
)

const Styled = styled(Plain)`
  div {
    min-height: 7rem;
    z-index: 0;
    background-image: ${({ post: { title } }: BlogPostHeadProps) =>
      GeoPattern.generate(title).toDataUrl()};
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
