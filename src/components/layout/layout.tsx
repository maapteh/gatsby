import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { theme, GlobalStyles } from '../../styles';
import { Link } from '../link';
import { MDXLayoutComponents, MDXGlobalComponents } from '../mdx';

const Container = styled.main`
    margin: 0 auto;
    max-width: 1080px;
    padding: 2rem;
`;

const Title = styled.h1`
    font-size: ${props => (props.theme.screens.sm ? '1.8rem' : '2.2rem')};
    margin: 20px 0px;
    color: white;
`;

const Tagline = styled.h2`
    font-size: 1.1rem;
    font-weight: 400;
    color: ${props => props.theme.colors.blue};
`;

const Layout: React.FC = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);

    const { title, description } = data.site.siteMetadata;

    return (
        <ThemeProvider theme={theme()}>
            <Container>
                <GlobalStyles />

                <Title>{title.toUpperCase()}</Title>

                <Tagline>{description}</Tagline>

                <p>
                    <Link to="/">Home</Link> <Link to="/about">About</Link>
                </p>

                <main>
                    <MDXProvider
                        components={{
                            ...MDXLayoutComponents,
                            ...MDXGlobalComponents,
                        }}
                    >
                        {children}
                    </MDXProvider>
                </main>


            </Container>
        </ThemeProvider>
    );
};

export { Layout };
