import React from "react";
import { TotalPrice } from "./TotalPrice";
import {HeaderWrapper, Title, TotalPriceWrapper} from "../../styles/Header.styled"

export const Header: React.FunctionComponent = () => {
    return (
        <HeaderWrapper>
            <Title>Shopping List</Title>
            <TotalPriceWrapper>
                <TotalPrice />
            </TotalPriceWrapper>
        </HeaderWrapper>
    );
};
