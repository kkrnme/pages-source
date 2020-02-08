import { Background } from "./Background"
import React from "react"
import SiteFooter from "../organisms/Footer"
import SiteHeader from "../organisms/Header"
import { Meta } from "./templates"
import styled from "@emotion/styled"
import { ss, mq } from "../../styles"

export type BlogPageProps = Meta & { className?: string }

const BlogMain = styled.main`
  ${ss.letterSpacing}
  ${ss.container}
  ${ss.hidden}
  ${ss.centered}
  border-radius: 0;
  border: none;
  ${ss.transition}
  margin: 0 auto;
  ${mq[0]}{
    ${ss.rounded}
    ${ss.border}
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  &::selection {
    background-color: #00ad5670;
  }
`

export const BlogPage: React.FC<BlogPageProps> = props => (
  <Background description={props.description} title={props.title}>
    <SiteHeader />
    <BlogMain className={props.className}>{props.children}</BlogMain>
    <SiteFooter />
  </Background>
)
