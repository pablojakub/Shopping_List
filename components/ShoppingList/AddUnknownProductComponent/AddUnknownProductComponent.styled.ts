import { Wrapper } from "../../../styles/ShoppingListItem.styled"
import styled, { keyframes } from "styled-components"

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

export const NewProductWrapper = styled(Wrapper)`
    background-color: '#1ad1b9';

    &:hover {
        ${TooltipText} {
            visibility: visible;
        }
    }

    > svg:hover {
        animation: ${spin} 300ms ease-in-out;
    }
`