import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Date } from '../components/date';

// Template is run build-time, see gatsby-node.js
const EventPage = ({ data: { mdx }, children }) => {
    return (
        <Layout>
            <h1>{mdx.frontmatter.title} !</h1>
            <div>{mdx.frontmatter.date}</div>
            <Date date={mdx.frontmatter.date} />
            <MDXRenderer>{mdx.body}</MDXRenderer>
        </Layout>
    );
};

export default EventPage;

export const query = graphql`
    query($eventId: String!) {
        mdx(id: { eq: $eventId }) {
            body
            frontmatter {
                title
                date(formatString: "MMM DD YYYY")
            }
        }
    }
`;
