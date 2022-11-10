import React from 'react'
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
    </>
  )
}
