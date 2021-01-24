import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { Link } from '../link';

const ItemContainer = styled.li`
    list-style: none;
    padding: 6px 0;
    margin: 6px 0;
    border-bottom: 1px solid #fff;

    .gatsby-image-wrapper {
        float: left;
        margin: 0 12px 6px 0;
        border-radius: 2px;
    }

    a {
        text-decoration: none;
    }

    clear: both;
`;

type Props = {
    item: {
        node: {
            id: string;
            slug: string;
            excerpt: string;
            frontmatter: {
                title: string;
                date: string;
                image?: {
                    childImageSharp: {
                        fixed: any;
                    };
                };
            };
        };
    };
};

export const BlockNewsItem: React.FC<Props> = ({ item }) => {
    const news = item.node.frontmatter;
    const image = news.image?.childImageSharp.fixed;
    return (
        <div key={item.node.id}>
            <ItemContainer key={item.node.id}>
                {image ? (
                    <Img
                        fixed={news.image?.childImageSharp.fixed}
                        alt="headshot"
                    />
                ) : null}
                <Link to={`news/${item.node.slug}`}>
                    <strong>{news.title}</strong>
                    <br />
                    <i>{news.date}</i>
                </Link>
            </ItemContainer>
        </div>
    );
};
