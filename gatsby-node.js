const path = require('path');

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const createNews = (createPage, edges) => {
    edges.forEach(({ node }) => {
        createPage({
            path: `news/${node.slug}`,
            component: path.resolve(`./src/templates/news.tsx`),
            context: {
                newsId: node.id,
            },
        });
    });
};

function createNewsPages({ data, actions }) {
    if (!data.edges.length) {
        throw new Error('There are no news items!');
    }
    const { edges } = data;
    const { createPage } = actions;

    createNews(createPage, edges);
    return null;
}

const createEvents = (createPage, edges) => {
    edges.forEach(({ node }) => {
        createPage({
            path: `event/${node.slug}`,
            component: path.resolve(`./src/templates/event.tsx`),
            context: {
                eventId: node.id,
            },
        });
    });
};

function createEventsPages({ data, actions }) {
    if (!data.edges.length) {
        throw new Error('There are no event items!');
    }
    const { edges } = data;
    const { createPage } = actions;

    createEvents(createPage, edges);
    return null;
}

const createPages = async ({ actions, graphql }) => {
    const { data, errors } = await graphql(`
        query {
            news: allMdx(
                filter: { fileAbsolutePath: { regex: "//content/news//" } }
            ) {
                edges {
                    node {
                        id
                        slug
                        fileAbsolutePath
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
            events: allMdx(
                filter: { fileAbsolutePath: { regex: "//content/events//" } }
            ) {
                edges {
                    node {
                        id
                        slug
                        fileAbsolutePath
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
        }
    `);

    if (errors) {
        return Promise.reject(errors);
    }

    const { news, events } = data;

    createNewsPages({
        podcastPath: '',
        data: news,
        actions,
    });

    createEventsPages({
        data: events,
        actions,
    });
};

const onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `Mdx`) {
        const parent = getNode(node.parent);

        let collection = parent.sourceInstanceName;

        createNodeField({
            node,
            name: 'collection',
            value: collection,
        });
    }
};

module.exports = {
    createPages,
    onCreateNode,
};
