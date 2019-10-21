import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }: dataType) => (
  <Layout>
    <h1>UNDER CONSTRUCTION</h1>
    <p>kkrn.me</p>
    <p>{data.site.siteMetadata.discription}</p>
  </Layout>
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

interface dataType {
  data: {
    site: {
      siteMetadata: {
        discription: string
      }
    }
  }
}
