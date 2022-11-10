import React from "react";
import { TotalPrice } from "./TotalPrice";
import {HeaderWrapper, Title, TotalPriceWrapper} from "../../styles/Header.styled"
import { HeaderProps } from "./Header.types";
import Link from 'next/link'

export const Header: React.FunctionComponent<HeaderProps> = ({totalPrice}) => {
    return (
        <HeaderWrapper>
            <Link href='/'> 
            <Title>Shopping List</Title>
            </Link>
            <TotalPriceWrapper>
                <TotalPrice totalPrice={totalPrice}/>
            </TotalPriceWrapper>
        </HeaderWrapper>
    );
};
