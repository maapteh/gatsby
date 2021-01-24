import React from 'react';
import { Link } from '..';
import { render } from '@testing-library/react';

it('matches snapshot', () => {
    const { asFragment } = render(<Link to="/home">Home</Link>);
    expect(asFragment()).toMatchSnapshot();
});
