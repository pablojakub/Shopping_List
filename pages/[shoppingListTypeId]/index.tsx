import React from 'react';
import { Header } from '../../components/Header/Header';
import { ShoppingListLayout } from '../../components/ShoppingList/ShoppingList';
import clientPromise from '../../lib/mongodb'
import mongoose from 'mongoose';

export default function HomeList(props) {
  const shoppingListItems = JSON.parse(props.shoppingList);
  const availableItems = shoppingListItems.shoppingList.filter(obj => obj.isAdded === false);
  const addedItems = shoppingListItems.shoppingList.filter(obj => obj.isAdded === true)

  const totalPrice = shoppingListItems.shoppingList
    .map(item => item.price)
    .reduce((prevVal, currVal) => prevVal + currVal, 0);


  return (
    <>
    <Header totalPrice={totalPrice}/>
    <ShoppingListLayout isShoppingList shoppingListItems={addedItems}/>
    <ShoppingListLayout isShoppingList={false} shoppingListItems={availableItems}/>
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
    fallback: 'blocking',
    paths: shoppingLists.map((shoppingList) => ({
      params: { 
        shoppingListTypeId: shoppingList._id.toString() 
      },
    }))
  }
}

export async function getStaticProps(context) {
  
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
    }
  }
}
