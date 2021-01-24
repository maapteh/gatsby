const siteTitle = 'maapteh';
const siteDescription = 'A Gatsby exploration';
const siteAuthor = '@mpth';
const siteUrl = 'https://maapteh.vercel.app';
const siteImage = `${siteUrl}/icons/icon_512x512.png`;
const siteKeywords = ['gatsby', 'typescript', 'graphql', 'react'];

module.exports = {
    siteMetadata: {
        title: siteTitle,
        description: siteDescription,
        author: siteAuthor,
        url: siteUrl,
        keywords: siteKeywords,
        image: siteImage,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/images`,
                name: `images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/news`,
                name: `news`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/events`,
                name: `events`,
            },
        },
        {
            resolve: 'gatsby-plugin-react-axe',
            options: {
                showInProduction: false,
                // Options to pass to axe-core.
                // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
                axeOptions: {
                    // Your axe-core options.
                },
            },
        },
        `gatsby-plugin-styled-components`,
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: siteTitle,
                short_name: siteTitle,
                description: siteDescription,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: 'src/images/icon.png',
                icons: [
                    {
                        src: 'icons/icon_512x512.png',
                        sizes: '512x512',
                    },
                    {
                        src: 'icons/icon_192x192.png',
                        sizes: '192x192',
                    },
                ],
            },
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
    ],
};
