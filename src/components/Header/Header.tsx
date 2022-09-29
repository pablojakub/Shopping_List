import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
    width: 100%;
    height: 5rem;
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #252424;
`;

const Title = styled.h1`
    color: white;
`;

const TotalPriceWrapper = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Header: React.FunctionComponent = () => {
    return (
        <HeaderWrapper>
            <Title>Shopping List</Title>
            <TotalPriceWrapper></TotalPriceWrapper>
        </HeaderWrapper>
    );
};
