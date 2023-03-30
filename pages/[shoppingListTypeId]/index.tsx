import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { ShoppingListLayout } from '../../components/ShoppingList/ShoppingListLayout';
import clientPromise from '../../lib/mongodb'
import mongoose from 'mongoose';
import { itemData } from '../../components/ShoppingList/ShoppingListItem/ShoppingListItem.types';
import { useRouter } from 'next/router';
import { Circles } from 'react-loader-spinner';
import Modal from '../../components/Modal/Modal';
import { Product } from '../../components/types/globalTypes';

interface ShoppingListTypePageProps {
  shoppingList: string
}

type ShoppingListItems = {
  name: string;
  shoppingList: {
    id: string;
    name: string;
    quantity: number;
    iconId: number;
    price: number;
    isAdded: boolean;
    shoppingListName: string;
    onAddItem: (data: itemData) => void;
    onEditPrice: (data: itemData) => void;
  }[]
}

export default function HomeList(props: ShoppingListTypePageProps) {
  const shoppingListItems: ShoppingListItems = JSON.parse(props.shoppingList);
  
  const availableItemsFromDb = shoppingListItems.shoppingList.filter((obj: { isAdded: boolean; }) => obj.isAdded === false);
  const addedItemsFromDb = shoppingListItems.shoppingList.filter((obj: { isAdded: boolean; }) => obj.isAdded === true);
  const totalPrice = shoppingListItems.shoppingList
    .filter((obj: { isAdded: boolean; }) => obj.isAdded === true)
    .map((item: { price: number; }) => item.price)
    .reduce((prevVal: number, currVal: number) => prevVal + currVal, 0);

  const [isRefreeshing, setIsRefreshing] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  }

useEffect(() => {
    setIsRefreshing(false);
},[props.shoppingList])
  
  const changeItemHandler = async (data: itemData) => {
    const result = await fetch('/api/editShoppingItem', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    if (result.status < 300) {
      refreshData();
    }
  };

  const addNewItemHandler = async (newItem: Product) => {
    const preparedObject = {...newItem, shoppingListName: `${shoppingListItems.name}`};

    const result = await fetch('/api/addNewShoppingItem', {
      method: 'POST',
      body: JSON.stringify(preparedObject),
      headers: {
        'Content-Type' : 'application/json'
      }
    })

    if (result.status < 300) {
      refreshData();
    }
  }

  return (
    <>
    <Modal
      show={isModalVisible}
      onClose={() => setIsModalVisible(false)}
      onAddUnknownItem={addNewItemHandler}
      ></Modal>
    <Header totalPrice={totalPrice}/>
    {isRefreeshing && <Circles height="80"
      width="60"
      color="#1ad1b9"
      ariaLabel="circles-loading"
      wrapperStyle={{'display' : 'flex', 
      'justify-content': 'center',
      'margin-top' : '8px'
    }}
      wrapperClass=""
      visible={true} /> }
    <ShoppingListLayout 
    isShoppingList 
    shoppingListItems={addedItemsFromDb} 
    shoppingListName={shoppingListItems.name}
    onAddItem={changeItemHandler}
    onEditPrice={changeItemHandler}
    onOpenModal={() => setIsModalVisible(true)}
    />
    <ShoppingListLayout 
    isShoppingList={false} 
    shoppingListItems={availableItemsFromDb}
    shoppingListName={shoppingListItems.name}
    onAddItem={changeItemHandler}
    onEditPrice={changeItemHandler}
    />
    </>
  );
}

export async function getStaticPaths() {

  const client = await clientPromise;
  const database = client.db('shoppinglist');
  const shoppingTypesColl = database.collection('shoppinglist');

  // first param in find() filter criteria second is which property should be returned
  const shoppingLists = await shoppingTypesColl.find().toArray();

  return {
    fallback: false,
    paths: shoppingLists.map((shoppingList) => ({
      params: { 
        shoppingListTypeId: shoppingList._id.toString().trim(),
      },
    }))
  }
}

export async function getStaticProps(context: { params: { shoppingListTypeId: any; }; }) {
  
 const shoppingListTypeId = context.params.shoppingListTypeId

 const client = await clientPromise;
 const database = client.db('shoppinglist');
 const shoppingTypesColl = database.collection('shoppinglist');

 const objId = new mongoose.Types.ObjectId(shoppingListTypeId)

 const selectedShoppingType = await shoppingTypesColl.findOne({_id: objId});

if (!selectedShoppingType!.shoppingList) { 
  return {
    redirect: {
      destination: '/ups',
      permanent: false

    }
  }
}

const serialized = JSON.stringify(selectedShoppingType);

  return {
    props: {
      shoppingList: serialized
    },
  }
}
