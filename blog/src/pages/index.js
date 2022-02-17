import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <ul>
    {
      data.allContentfulBlogPost.edges.map(edges => (
        <li>
          <Link to={edges.node.slug} key={edges.node.id}>{edges.node.title}</Link>
        </li>
      ))
    }
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
{
	allContentfulBlogPost {
    edges {
			node {
        id
        title
        slug
      }
    }    
	}
}
`
