import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { BlockNewsItem } from '../components/block-news-item';
import { BlockEventItem } from '../components/block-event-item';

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
                                image {
                                    childImageSharp {
                                        fixed(width: 90, height: 90) {
                                            ...GatsbyImageSharpFixed
                                        }
                                    }
                                }
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

            <p>
                Nulla eu massa vel quam auctor maximus. Curabitur et congue
                enim. Praesent non magna pulvinar, molestie felis sed, lobortis
                purus. Phasellus convallis molestie tellus in hendrerit. Quisque
                eu ultrices turpis. In non sagittis sapien, eu auctor sapien.
                Sed cursus aliquam est vitae hendrerit. Mauris a nibh porttitor,
                sollicitudin massa eu, tincidunt est. Aenean dignissim placerat
                suscipit. Etiam lacus diam, venenatis vitae suscipit eget,
                porttitor ut ipsum.
            </p>
            <h3>Latest news</h3>
            <ul>
                {data?.news.edges.map(item => (
                    <BlockNewsItem item={item} />
                ))}
            </ul>

            <h3>Latest events</h3>

            {data?.events.edges.map(item => (
                <BlockEventItem item={item} />
            ))}
        </Layout>
    );
};

export default App;
