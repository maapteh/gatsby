import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Date } from '../components/date';

// Template is run build-time, see gatsby-node.js
const NewsPage = ({ data: { mdx }, children }) => {
    return (
        <Layout>
            <h1>{mdx.frontmatter.title}</h1>

            <Date date={mdx.frontmatter.date} />

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
            }
        }
    }
`;
