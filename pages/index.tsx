import Link from 'next/link';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ListItem from '../components/Layout/ListItem'
import Modal from '../components/Modal/Modal';
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

const typing = keyframes`
  from {
    width: 0;
  }
` 

const effect = keyframes`
  50% {
    border-color: transparent;
  }
`

const WelcomeText = styled.h1`
  color: white;
  width: 40%;
  font-size: clamp(1rem, 1.5vw + 1rem, 2.5rem);
  border-right: 3px solid white;
  white-space: nowrap;
  overflow: hidden;
  animation: ${typing} 2s steps(21), ${effect} .5s step-end infinite alternate;
`

type ShoppingType = {
  name: string,
  id: string,
}


export default function App(props: any) {
  
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
  return (
    <Wrapper>
      <Modal 
      show={isModalVisible}
      onClose={() => setIsModalVisible(false)}
      onAddNewList={() => console.log('yeah')}
      ></Modal>
        <WelcomeText>Your shopping lists:</WelcomeText>
        {props.shoppingLists.map((shoppingList: ShoppingType) => {
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
     revalidate: 1
  }
}

