import * as React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Layout } from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Date } from '../components/date';

// Template is run build-time, see gatsby-node.js
const NewsPage = ({ data: { mdx }, children }) => {
    const image = mdx.frontmatter.image?.childImageSharp?.fixed;

    return (
        <Layout>
            <h1>{mdx.frontmatter.title}</h1>

            {image ? (
                <div style={{ float: 'left', margin: '0 12px 6px 0' }}>
                    <Img fixed={image} />
                </div>
            ) : null}

            <div style={{ float: 'left', margin: '0 6px 6px 0' }}>
                <Date date={mdx.frontmatter.date} />
            </div>
            <MDXRenderer>{mdx.body}</MDXRenderer>
        </Layout>
    );
};

export default NewsPage;

export const query = graphql`
    query($newsId: String!) {
        mdx(id: { eq: $newsId }) {
            body
            frontmatter {
                title
                date(formatString: "MMM DD YYYY")
                image {
                    childImageSharp {
                        fixed(width: 400) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
`;
