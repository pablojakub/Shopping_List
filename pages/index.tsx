import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import ListItem from '../components/Layout/ListItem'
import clientPromise from '../lib/mongodb'

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

type ShoppingType = {
  name: string,
  id: string,
}


export default function App(props: any) {
  console.log(props.shoppingTypes)
  return (
    <Wrapper>
        <WelcomeText>Your shopping lists:</WelcomeText>
        {props.shoppingTypes.map((shoppingType: ShoppingType) => {
          console.log(shoppingType)
          return (
            <ListItem
              key={shoppingType.id}
            ><Link href={'/' + shoppingType.id}>{shoppingType.name}</Link>
            </ListItem>
          )
        })}
    </Wrapper>
  );
}

export async function getStaticProps() {

  const client = await clientPromise;
  const database = client.db('shoppinglist');
  const shoppingTypeCollection = database.collection('shoppingtypes');

 const shoppingTypes = await shoppingTypeCollection.find().toArray();

  return {
    props: { 
      shoppingTypes: shoppingTypes.map(shoppingType => ({
        name: shoppingType.name,
        id: shoppingType._id.toString(),
      }))
     },
  }
}

