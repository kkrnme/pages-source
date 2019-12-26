import { GrayBackground } from "./GrayBackground"
import React from "react"
import SiteFooter from "../Footer"
import SiteHeader from "../Header"
import { Meta } from "./templates"

export const BlogPage: React.FC<BlogPageProps> = props => (
  <GrayBackground description={props.description} title={props.title}>
    <SiteHeader />
    <props.BlogWrapper children={props.children} />

    <SiteFooter />
  </GrayBackground>
)

export type BlogPageProps = { BlogWrapper: React.FC } & Meta
