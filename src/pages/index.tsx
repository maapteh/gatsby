import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Link } from '../components/link';
import { useStaticQuery, graphql } from 'gatsby';

const App = () => {
    const data = useStaticQuery(
        graphql`
            {
                news: allMdx(
                    sort: { fields: [frontmatter___date], order: DESC }
                    filter: { fileAbsolutePath: { regex: "//content/news//" } }
                ) {
                    edges {
                        node {
                            id
                            slug
                            frontmatter {
                                title
                                published
                                date(formatString: "MMMM DD, YYYY")
                            }
                            excerpt(pruneLength: 280)
                        }
                    }
                }

                events: allMdx(
                    sort: { fields: [frontmatter___date], order: DESC }
                    filter: { fileAbsolutePath: { regex: "//content/events//" } }
                ) {
                    edges {
                        node {
                            id
                            slug
                            frontmatter {
                                title
                                published
                                date(formatString: "MMMM DD, YYYY")
                            }
                            excerpt(pruneLength: 280)
                        }
                    }
                }
            }
        `,
    );

    return (
        <Layout>
            <SEO />

            <h3>Latest news</h3>
            {data?.news.edges.map((item, i) => {
                const news = item.node.frontmatter;
                return (
                    <div key={i}>
                        <Link to={`news/${item.node.slug}`}>
                            {news.title} {news.date}
                        </Link>
                    </div>
                );
            })}

            <h3>Latest events</h3>
            {data?.events.edges.map((item, i) => {
                const event = item.node.frontmatter;
                return (
                    <div key={i}>
                        <Link to={`event/${item.node.slug}`}>
                            {event.title} {event.date}
                        </Link>
                    </div>
                );
            })}
        </Layout>
    );
};

export default App;
