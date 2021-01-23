import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

interface Props {
    isInverted?: boolean;
}

const Link = styled(GatsbyLink)<Props>`
    color: #fff;
    text-decoration: ${props => (props.isInverted ? 'none' : 'underline')};
    :hover {
        text-decoration: ${props => (props.isInverted ? 'underline' : 'none')};
    }
`;

export { Link };
