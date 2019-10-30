import React from "react"
import { graphql } from "gatsby"
import { SiteHeader, SiteFooter } from "../components/HeaderFooter"
import { TopStyle } from "../components/style"
import Logo from "../components/kkrnme_logo.svg"

export default ({ data }) => (
  <div>
    <TopStyle />
    <SiteHeader />
    <main>
      <h1>KKRN.ME</h1>
      <p>{data.site.siteMetadata.discription}</p>
      <img
        src={Logo}
        alt="KKRN.ME"
        css={{
          width: `80%`,
        }}
      />
    </main>
    <SiteFooter />
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
