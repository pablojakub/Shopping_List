import { getServerSession } from 'next-auth';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import ListItem from '../components/Layout/ListItem'
import Modal from '../components/Modal/Modal';
import { Button } from '../components/Modal/Modal.styled';
import { NewList } from '../components/Modal/Modal.types';
import AddUnknownProductComponent from '../components/ShoppingList/AddUnknownProductComponent/AddUnknownProductComponent';
import { ShoppingListDocument } from '../components/types/globalTypes';
import clientPromise from '../lib/mongodb'
import authOptions from './api/auth/[...nextauth]'

//////////////////////////////STYLING////////////////////////////////////
const ShoppingListWrappper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 35%;
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
  position: relative;
  bottom: 0.5em;
  color: white;
  width: 390px;
  min-height: 18%;
  font-size: clamp(1rem, 1.5vw + 1rem, 2.5rem);
  border-right: 3px solid white;
  white-space: nowrap;
  overflow: hidden;
  animation: ${typing} 2s steps(21), ${effect} .5s step-end infinite alternate;

  @media (max-width: 1550px) {
    width: 380px;
  }

  @media (max-width: 1200px) {
    width: 330px;
    min-height: 10%
  }

  @media (max-width: 1000px) {
    width: 300px;
  }

  @media (max-width: 700px) {
    width: 250px;
  }

  @media (max-width: 500px) {
    width: 230px;
  }
` 

/////////////////////////////TYPES/////////////////////////////////
type ShoppingListType = Pick<ShoppingListDocument, "id" | "name">

type MainPageProps = {
  shoppingLists: ShoppingListDocument[]
}

type MainPageState = 'MODAL' | 'LOADING' | 'DEFAULT'

export default function App(props: MainPageProps) {
  const [mainPageState, setMainPageState] = useState<MainPageState>();
 
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
    setMainPageState('LOADING');
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
    setMainPageState('DEFAULT');
  },[props.shoppingLists]);

  const onDeleteList = async (listToDelete: ListItem) => {

    const result = await fetch('/api/deleteList', {
      method: 'DELETE',
      body: JSON.stringify(listToDelete),
      headers: {
        'Content-Type' : 'application/json'
      }
    });

    if (result.status < 300) {
      refreshData();
    }
  }

  return (
    <ShoppingListWrappper>
      <>
      <Modal 
      show={mainPageState === 'MODAL'}
      onClose={() => setMainPageState('DEFAULT')}
      onAddNewList={addNewListHandler}
      ></Modal>
        <WelcomeText>Your shopping lists:</WelcomeText>
        {props.shoppingLists.map((shoppingList: ShoppingListType) => {
          return (
            <ListItem
              key={shoppingList.id}
              onDelete={onDeleteList}
              shoppingListId={shoppingList.id}
              shoppingListName={shoppingList.name}
            >
            </ListItem>
          )
        })}
        <AddUnknownProductComponent onOpenModal={() => setMainPageState('MODAL')} isOnListPage  />
      </>
    </ShoppingListWrappper>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    }
  }

  console.log(session);

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
     
  }
}

