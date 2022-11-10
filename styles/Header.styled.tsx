import styled from "styled-components";

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 5rem;
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #252424;
`;

export const Title = styled.h2`
    color: white;
    font-size: clamp(1rem, 1.5vw + 1rem, 2.5rem);
    cursor: pointer;

    @media only screen and (max-width: 400px) {
        text-indent: -30px;
        padding-left: 30px;
    }
`;

export const TotalPriceWrapper = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    height: 50%;
`;