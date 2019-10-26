import React from "react"
import { graphql } from "gatsby"
import { SiteHeader } from "../components/SiteHeader"
import { TopStyle } from "../components/style"

export default ({ data }) => (
  <div>
    <TopStyle />
    <SiteHeader />
    <main>
      <h1>UNDER CONSTRUCTION</h1>
      <p>kkrn.me</p>
      <p>{data.site.siteMetadata.discription}</p>
    </main>
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
