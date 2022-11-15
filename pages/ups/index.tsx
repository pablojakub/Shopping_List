import React from 'react'
import { ShoppingListTitle, ShoppingListWrapper } from '../../styles/ShoppingList.styled'

export default function HomeList(props) {
  return (
    <ShoppingListWrapper>
      <ShoppingListTitle> 
      This list doesn't have any items. Would you like to add some?
    </ShoppingListTitle>
    </ShoppingListWrapper>
    
  );
}