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
`;

type Props = {
    item: {
        node: {
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
    i: number;
};

export const BlockNewsItem: React.FC<Props> = ({ item, i }) => {
    const news = item.node.frontmatter;
    return (
        <ItemContainer key={i}>
            <Img fixed={news.image?.childImageSharp.fixed} alt="headshot" />
            <Link to={`news/${item.node.slug}`} isInverted>
                <strong>{news.title}</strong>
                <br />
                <i>{news.date}</i>
                <br />
                {item.node.excerpt}
            </Link>
        </ItemContainer>
    );
};
