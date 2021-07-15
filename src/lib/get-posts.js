import { graphql, useStaticQuery } from 'gatsby';

const GetPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          id
          frontmatter {
            id # required for algolia
            title
            slug
            author
            tags
            description
            date(formatString: "MMMM Do, YYYY")
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    description: post.frontmatter.description,
    author: post.frontmatter.author,
    tags: post.frontmatter.tags,
    excerpt: post.excerpt,
    readingTime: post.fields.readingTime.text,
    date: post.frontmatter.date,
  }));
};

export default GetPosts;
