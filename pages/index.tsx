import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import ListItem from '../components/Layout/ListItem'

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

const DUMMY_LIST = [{
  id: 'homeList',
  name: 'Home List'
},
{
  id: 'otherList',
  name: 'Other List'
}
]


export default function App() {
  return (
    <Wrapper>
        <WelcomeText>Your shopping lists:</WelcomeText>
        {DUMMY_LIST.map((list) => {
          return (
            <ListItem
              key={list.id}
            ><Link href='/homelist' style={{ color:'3f3f3f', textDecoration: 'none' }}>{list.name}</Link>
            </ListItem>
          )
        })}
        
    </Wrapper>
  );
}

