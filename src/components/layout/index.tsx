import React, { FC, ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { theme, GlobalStyles } from '../../styles';
import { Link } from '../link';
import { MDXLayoutComponents, MDXGlobalComponents } from '../mdx';

export const Container = styled.main`
    margin: 0 auto;
    max-width: 1080px;
    padding: 12px 24px;
`;

type Props = {
    children: ReactNode;
    hero?: ReactNode;
};

export const Layout: FC<Props> = ({ children, hero = null }) => {
    return (
        <ThemeProvider theme={theme()}>
            <Container>
                <p>
                    <Link to="/">Home</Link> <Link to="/about">About</Link>
                </p>
            </Container>

            {hero ? hero : null}

            <Container>
                <GlobalStyles />
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
                © {new Date().getFullYear()} - maapteh
            </Container>
        </ThemeProvider>
    );
};
