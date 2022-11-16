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
  console.log(props.shoppingLists)
  return (
    <Wrapper>
        <WelcomeText>Your shopping lists:</WelcomeText>
        {props.shoppingLists.map((shoppingList: ShoppingType) => {
          console.log(shoppingList)
          return (
            <ListItem
              key={shoppingList.id}
            ><Link href={'/' + shoppingList.id}>{shoppingList.name}</Link>
            </ListItem>
          )
        })}
    </Wrapper>
  );
}

export async function getStaticProps() {

  const client = await clientPromise;
  const database = client.db('shoppinglist');
  const shoppingListCollection = database.collection('shoppinglist');

 const shoppingLists = await shoppingListCollection.find().toArray();

  return {
    props: { 
      shoppingLists: shoppingLists.map(shoppingList => ({
        name: shoppingList.name,
        id: shoppingList._id.toString(),
      }))
     },
  }
}

