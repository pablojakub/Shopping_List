import React from 'react'
import { ShoppingListContent, ShoppingListTitle, ShoppingListWrapper } from '../../../styles/ShoppingList.styled';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';

interface AvailableItem {
  id: string;
  name: string;
  price: number;
  iconId: number; 
}

interface AvailableItemsProps {
  availableItems: AvailableItem[]
}

export const AvailableItems: React.FunctionComponent<AvailableItemsProps> = ({availableItems}) => {
  return (
    <ShoppingListWrapper>
    <ShoppingListTitle> Available products</ShoppingListTitle>
    <ShoppingListContent>
    { availableItems.map((item) => (
      <ShoppingListItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        iconId={item.iconId}
        isAdded={false}
        />
    ))} 
    </ShoppingListContent>
    </ShoppingListWrapper>
    
  )
}
