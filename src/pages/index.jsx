import React from "react"
import { graphql } from "gatsby"
import { SiteHeader } from "../components/SiteHeader"
import { TopStyle, Main } from "../components/style"

export default ({ data }) => (
  <div>
    <TopStyle />
    <SiteHeader />
    <Main>
      <h1>UNDER CONSTRUCTION</h1>
      <p>kkrn.me</p>
      <p>{data.site.siteMetadata.discription}</p>
    </Main>
  </div>
)

export const query = graphql`
  query DescQuery {
    site {
      siteMetadata {
        discription
      }
    }
  }
`
