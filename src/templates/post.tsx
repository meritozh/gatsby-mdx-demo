import React, { ReactNode } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

export default ({ data }: { data: any }) => {
  const post = data.mdx
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h1>This is post template.</h1>
        <MDXRenderer>{post.code.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`
