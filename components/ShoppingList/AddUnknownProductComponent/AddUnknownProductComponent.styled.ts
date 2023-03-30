import { Wrapper } from "../../../styles/ShoppingListItem.styled"
import styled, { css, keyframes } from "styled-components"

const spin = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`
export const TooltipText = styled.span`
    visibility: hidden;
    width: 10%;
    background-color: #252424;
    color: white;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    transform: translate(100px, -50px);
    z-index: 1;
    font-size: 0.7rem;
`

export const NewProductWrapper = styled(Wrapper) <{ isAdded: boolean, isOnListPage: boolean }>`
    background-color: ${props => props.isOnListPage ? 'transparent' : '#1ad1b9'};
    min-width: 20%;
    width: 15%;
    height: 15%;
    margin: 1rem 0rem;
    ${({ isOnListPage }) => !isOnListPage &&
        css`
        min-width: 150px;
        width: 150px;
        margin: 0rem 0rem;

        @media(max-width: 700px) {
        width: 75px;
        height: 75px;
        min-width: 75px;
        gap: 0px;
    }
        
        & svg {
            width: 50%;
        }
        &:hover {
                ${TooltipText} {
                    visibility: visible;
                }
            }
`}

    > svg:hover {
        animation: ${spin} 300ms ease-in-out;
    }
`