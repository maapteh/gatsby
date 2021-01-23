import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { Link } from '../link';
import { Date } from '../date';

const ItemContainer = styled.div`
    display: flex;

    .gatsby-image-wrapper {
        float: left;
        margin: 0 12px 6px 0;
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
            };
        };
    };
    i: number;
};

export const BlockEventItem: React.FC<Props> = ({ item, i }) => {
    const event = item.node.frontmatter;
    return (
        <ItemContainer key={i}>
            <Date date={event.date} />
            <Link to={`event/${item.node.slug}`} isInverted>
                <strong>{event.title}</strong>
                <br />
                {item.node.excerpt}
            </Link>
        </ItemContainer>
    );
};
