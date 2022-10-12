import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
display: block;
z-index: 0;
`


const WelcomeText = styled.h1`
  color: white;
  z-index: 1;
  position: relative;
  width: fit-content;
  font-size: clamp(1rem, 1.5vw + 1rem, 2.5rem);
  left: 50%;
  transform: translateX(-50%);
`


export default function App() {
  return (
    <>
    <ImageWrapper>
        <Image src="/../public/backgroud.png" layout="fill" />
        </ImageWrapper>
        <WelcomeText>Hello my friend!</WelcomeText>
    </>
  );
}

