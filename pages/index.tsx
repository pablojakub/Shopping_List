import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import ListItem from '../components/Layout/ListItem'
import Modal from '../components/Modal/Modal';
import { NewList } from '../components/Modal/Modal.types';
import AddUnknownProductComponent from '../components/ShoppingList/AddUnknownProductComponent/AddUnknownProductComponent';
import { ShoppingListDocument } from '../components/types/globalTypes';
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

type ShoppingListType = Pick<ShoppingListDocument, "id" | "name">

type MainPageProps = {
  shoppingLists: ShoppingListDocument[]
}

export default function App(props: MainPageProps) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isRefreeshing, setIsRefreshing] = useState<boolean>(false);
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  }

  const addNewListHandler = async (newList: NewList) => {
    const result = await fetch('/api/addNewList', {
      method: 'POST',
      body: JSON.stringify(newList),
      headers: {
        'Content-Type' : 'application/json'
      }
    })

    if (result.status < 300) {
      refreshData();
    }
  }

  useEffect(() => {
    setIsRefreshing(false);
  },[props.shoppingLists])

  return (
    <Wrapper>
      <Modal 
      show={isModalVisible}
      onClose={() => setIsModalVisible(false)}
      onAddNewList={addNewListHandler}
      ></Modal>
        <WelcomeText>Your shopping lists:</WelcomeText>
        {props.shoppingLists.map((shoppingList: ShoppingListType) => {
          return (
            <ListItem
              key={shoppingList.id}
            ><Link href={'/' + shoppingList.id}>{shoppingList.name}</Link>
            </ListItem>
          )
        })}
        <AddUnknownProductComponent onOpenModal={() => setIsModalVisible(true)} isOnListPage  />
    </Wrapper>
  );
}

export async function getStaticProps() {

  const client = await clientPromise;
  const database = client.db('shoppinglist');
  const shoppingListCollection = database.collection('shoppinglist');

 const shoppingLists = await shoppingListCollection.find({ isDonor: false }).toArray();

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

