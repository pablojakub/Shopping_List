import styled, { keyframes } from "styled-components"

const spiningAnimation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`

export const LoadingSpinner = styled.div`
width: 50px;
height: 50px;
border: 10px solid #f3f3f3; /* Light grey */
border-top: 10px solid #383636; /* Black */
border-radius: 50%;
animation: ${spiningAnimation} 1.5s linear infinite;
position: absolute;
z-index: 2;
top: 0px;
left: 0px;
bottom: 0px;
right: 0px;
margin: auto;
` 

export const SpinnerContainer = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.4);
z-index: 1;
`