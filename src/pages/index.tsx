import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Link } from '../components/link';
import { useStaticQuery, graphql } from 'gatsby';
import { Date } from '../components/date';
import { Footer } from '../components/footer';

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
                    filter: {
                        fileAbsolutePath: { regex: "//content/events//" }
                    }
                ) {
                    edges {
                        node {
                            id
                            slug
                            frontmatter {
                                title
                                published
                                date(formatString: "MMM DD YYYY")
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
            <ul>
                {data?.news.edges.map((item, i) => {
                    const news = item.node.frontmatter;
                    return (
                        <li key={i}>
                            <Link to={`news/${item.node.slug}`}>
                                {news.title} {news.date}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <h3>Latest events</h3>
            {data?.events.edges.map((item, i) => {
                const event = item.node.frontmatter;
                return (
                    <div key={i} style={{ display: 'flex' }}>
                        <Date date={event.date} />
                        <Link to={`event/${item.node.slug}`}>
                            {event.title}
                        </Link>
                    </div>
                );
            })}


            <Footer />
        </Layout>
    );
};

export default App;
