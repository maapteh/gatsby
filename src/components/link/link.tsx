import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const Link = styled(GatsbyLink)`
    color: #fff;
    text-decoration: underline;
    :hover {
        text-decoration: none;
    }
`;

export { Link };
