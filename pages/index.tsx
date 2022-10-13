import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 30%;
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WelcomeText = styled.h1`
  color: white;
  font-size: clamp(1rem, 1.5vw + 1rem, 2.5rem);
`


export default function App() {
  return (
    <Wrapper>
        <WelcomeText>Your shopping lists:</WelcomeText>
        <Link href='/homelist'>Idź do swojej listy</Link>
    </Wrapper>
  );
}

