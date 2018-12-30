/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {createFilePath} = require(`gatsby-source-filesystem`);
const componentWithMDXScope = require("gatsby-mdx/component-with-mdx-scope");
const path = require(`path`)

module.exports = {
  onCreateNode: ({node, getNode, actions}) => {
    const {createNodeField} = actions;
    if (node.internal.type === `Mdx`) {
      const slug = createFilePath({node, getNode, basePath: `pages`});
      createNodeField({node, name: `slug`, value: slug});
    }
  },

  createPages: ({graphql, actions}) => {
    const {createPage} = actions
    return new Promise((resolve, reject) => {
      graphql(`
        {
          allMdx {
            edges {
              node {
                fields {
                  slug
                }
                code {
                  scope
                }
              }
            }
          }
        }
      `).then(result => {
        result.data.allMdx.edges.forEach(
            ({node}) => {createPage({
              path: node.fields.slug,
              component: componentWithMDXScope(
                path.resolve(`./src/templates/post.tsx`),
                node.code.scope
              ),
              context: {
                slug: node.fields.slug
              }
            })})
        resolve();
      });
    });
  }
};
