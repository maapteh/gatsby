import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

export const Link = styled(GatsbyLink)`
    color: #303030;
    text-decoration: 'underline';
    :hover {
        text-decoration: 'none';
    }
`;
