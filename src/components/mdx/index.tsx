import React from 'react';

import { YouTube } from '../youtube';
import Title from './Title';
import Subtitle from './Subtitle';
import Paragraph from './Paragraph';

export const MDXLayoutComponents = {
    h1: props => <Title {...props} />,
    h2: props => <Subtitle {...props} />,
    p: props => <Paragraph {...props} />,
};

export const MDXGlobalComponents = {
    YouTube,
};
