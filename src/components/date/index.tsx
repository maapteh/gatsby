import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../styles';

const DateContainer = styled.div`
    justify-content: center;
    flex-basis: 90px;
    height: 90px;
    width: 90px;
    margin-right: 32px;
    padding: 16px;
    text-align: center;
    border-radius: 2px;
    background: #07c;
    color: #fff;
    line-height: 1.125;
`;

const MonthContainer = styled.span`
    display: flex;
    justify-content: center;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}
`;

const DayContainer = styled.span`
    display: flex;
    justify-content: center;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.02em;
    margin-bottom: -4px;
}
`;

type Props = {
    date: string;
};
export const Date: React.FC<Props> = ({ date }) => {
    if (!date) {
        return null;
    }
    const splitDate = date.split(' ');

    return (
        <DateContainer>
            <MonthContainer>{splitDate[0]}</MonthContainer>
            <DayContainer>{splitDate[1]}</DayContainer>
        </DateContainer>
    );
};
