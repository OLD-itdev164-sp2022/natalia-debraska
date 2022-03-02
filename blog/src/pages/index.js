import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <ul>
    {
      data.allContentfulBlogPost.edges.map(edge => (
        <li>
          <Link to={edge.node.slug} key={edge.node.id}>{edge.node.title}</Link>
          <div>
            <GatsbyImage
              image={edge.node.heroImage.gatsbyImageData}
              alt="test"
              />
          </div>
          <div>
            {edge.node.body.childMarkdownRemark.excerpt}
          </div>
        </li>
      ))
    }
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
query MyQuery {
  allContentfulBlogPost {
    edges {
      node {
        id
        title
        slug
        body {
          childMarkdownRemark {
            excerpt
          }
        }
        heroImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 300)
        }
      }
    }
  }
}
`
