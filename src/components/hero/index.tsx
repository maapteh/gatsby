import React, { FC } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    color: #fff;
`;

const Overlay = styled.div`
    width: 80%;
    text-align: center;
    margin: 0px auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

type Props = {
    fluid?: any;
    height?: string;
    position?: string;
    fit?: string;
};

const BgImage = styled(Img)<Props>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    height: ${props => props.height || '100vh'};
    & > img,
    & > picture {
        object-fit: ${props => props.fit || 'cover'} !important;
        object-position: ${props => props.position || '50% 50%'} !important;
        font-family: 'object-fit: ${props =>
            props.fit || 'cover'} !important; object-position: ${props =>
            props.position || '50% 50%'} !important;';
    }
`;

export const Hero: FC<Props> = props => {
    const { children, fluid, ...rest } = props;

    return (
        <Container>
            <BgImage fluid={fluid} {...rest} />
            <Overlay>
                <h1>{children}</h1>
            </Overlay>
        </Container>
    );
};

export default Hero;
