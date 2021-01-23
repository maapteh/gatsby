import React from 'react';

import { YouTube } from '../youtube';

import { Title } from './title';
import { Subtitle } from './subtitle';
import { Paragraph } from './paragraph';

export const MDXLayoutComponents = {
    h1: props => <Title {...props} />,
    h2: props => <Subtitle {...props} />,
    p: props => <Paragraph {...props} />,
};

export const MDXGlobalComponents = {
    YouTube,
};
