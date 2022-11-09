import React from "react";
import { TotalPrice } from "./TotalPrice";
import {HeaderWrapper, Title, TotalPriceWrapper} from "../../styles/Header.styled"
import { HeaderProps } from "./Header.types";

export const Header: React.FunctionComponent<HeaderProps> = ({totalPrice}) => {
    return (
        <HeaderWrapper>
            <Title>Shopping List</Title>
            <TotalPriceWrapper>
                <TotalPrice totalPrice={totalPrice}/>
            </TotalPriceWrapper>
        </HeaderWrapper>
    );
};
