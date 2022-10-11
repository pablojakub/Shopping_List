import styled, { keyframes } from "styled-components";

export const arrowRight = keyframes`
from {
  transform: rotate(0deg)
}
to {
  transform: rotate(-45deg)
}
` 

const arrowDown = keyframes`
from {
  transform: rotate(-45deg)
}
to {
  transform: rotate(0deg)
}
`

export const ShoppingListWrapper = styled.section`
display: flex;
gap: 16px;
flex-direction: column;
width: 60%;
align-content: center;
justify-content: center;
margin-top: 32px;
margin-left: auto;
margin-right: auto;

@media(max-width: 700px) {
  width: 90%
}
`

export const ShoppingListTitle = styled.h2`
color: white;
font-size: clamp(1rem, 1vw + 1rem, 1.5rem);
align-self: center;
`;

export const ShoppingListContent = styled.div`
align-self: center;
display: flex;
justify-content: center;
width: 100%;
gap: 8px;
flex-wrap: wrap;
`;

export const ArrowButton = styled.button<{menuOpen: boolean}>`
background: none;
color: inherit;
border: none;
padding-left: 5px;
font: inherit;
cursor: pointer;
outline: inherit;
animation: ${props => (props.menuOpen 
  ? arrowDown 
  : '')} 100ms;
animation-fill-mode: ${props => (props.menuOpen 
  ? 'forwards'
  : 'backwards')};
`;
