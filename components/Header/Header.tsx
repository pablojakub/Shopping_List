import React from "react";
import { TotalPrice } from "./TotalPrice";
import {HeaderWrapper, Title, TotalPriceWrapper} from "../../styles/Header.styled"
import { useRouter } from "next/router";

export const Header: React.FunctionComponent = () => {
    const router = useRouter();
    return (
        <HeaderWrapper>
            <Title>{router.pathname === '/' ? "Your Shopping Lists" : "Shopping List"}</Title>
            <TotalPriceWrapper>
                {router.pathname !== '/' && <TotalPrice />}
            </TotalPriceWrapper>
        </HeaderWrapper>
    );
};
