import React from "react";
import styled from "styled-components";
import { TotalPrice } from "./TotalPrice";

const HeaderWrapper = styled.header`
    width: 100%;
    height: 5rem;
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #252424;
`;

const Title = styled.h2`
    color: white;
    font-size: clamp(1rem,
    1.5vw + 1rem,
    2.5rem);
`;

const TotalPriceWrapper = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    height: 50%;
`;

export const Header: React.FunctionComponent = () => {
    return (
        <HeaderWrapper>
            <Title>Shopping List</Title>
            <TotalPriceWrapper>
                <TotalPrice/>
            </TotalPriceWrapper>
        </HeaderWrapper>
    );
};
