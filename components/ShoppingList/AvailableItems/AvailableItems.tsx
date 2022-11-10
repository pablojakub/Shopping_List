import React from 'react'
import { ShoppingListContent, ShoppingListTitle } from '../../../styles/ShoppingList.styled';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';

interface AvailableItem {
  id: string;
  name: string;
  price: number;
  icon: number; 
}

interface AvailableItemsProps {
  availableItems: AvailableItem[]
}

export const AvailableItems: React.FunctionComponent<AvailableItemsProps> = ({availableItems}) => {
  console.log(availableItems.length)
  return (
    <>
    <ShoppingListTitle> Available products</ShoppingListTitle>
    <ShoppingListContent>
    { availableItems.map((item) => (
      <ShoppingListItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        icon={item.icon}
        isAdded={false}
        />
    ))} 
    </ShoppingListContent>
    </>
    
  )
}
