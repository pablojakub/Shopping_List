import React from 'react';
import { Header } from '../../components/Header/Header';
import { ShoppingList } from '../../components/ShoppingList/ShoppingList';
import clientPromise from '../../lib/mongodb'
import mongoose from 'mongoose';
import { AvailableItems } from '../../components/ShoppingList/AvailableItems/AvailableItems';

export default function HomeList(props) {
  const shoppingListItems = JSON.parse(props.shoppingList);

  const totalPrice = shoppingListItems.shoppingList
    .map(item => item.price)
    .reduce((prevVal, currVal) => prevVal + currVal, 0);

  return (
    <>
    <Header totalPrice={totalPrice}/>
    <ShoppingList shoppingListItems={shoppingListItems.shoppingList}/>
    <AvailableItems availableItems={shoppingListItems.shoppingList} />
    </>
  );
}

export async function getStaticPaths() {

  const client = await clientPromise;
  const database = client.db('shoppinglist');
  const shoppingTypesColl = database.collection('shoppingtypes');

  // first param in find() filter criteria second is which property should be returned
  const shoppingTypes = await shoppingTypesColl.find().toArray();

  return {
    //false means that we sepcified all supported paths. m3 for example wouldn't be readed. (404)
    fallback: 'blocking',
    paths: shoppingTypes.map((shoppingType) => ({
      params: { 
        shoppingListTypeId: shoppingType._id.toString() 
      },
    }))
  }
}

export async function getStaticProps(context) {
  
 const shoppingListTypeId = context.params.shoppingListTypeId

 const client = await clientPromise;
 const database = client.db('shoppinglist');
 const shoppingTypesColl = database.collection('shoppingtypes');

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
