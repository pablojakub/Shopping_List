import React, { useState } from 'react';
import { ShoppingListLayoutProps } from './ShoppingListLayout.types';
import ShoppingListItem from './ShoppingListItem/ShoppingListItem';
import { ShoppingListWrapper, ShoppingListContent, ShoppingListTitle, ArrowButton } from '../../styles/ShoppingList.styled'



export const ShoppingListLayout: React.FunctionComponent<ShoppingListLayoutProps> = (props) => {
  const [isContentOpen, setisContentOpen] = useState(true);

  const showMenuHandler = () => {
    setisContentOpen(!isContentOpen);
  }

  let leftArrow = String.fromCodePoint(0x2B62);
  let downArrow = String.fromCodePoint(0x2193);


  return (
      <ShoppingListWrapper>
        <ShoppingListTitle>{props.isShoppingList ? 'Products to buy' : 'Available Products'} 
          <ArrowButton menuOpen={isContentOpen} onClick={showMenuHandler}>{isContentOpen ? downArrow : leftArrow}</ArrowButton>
        </ShoppingListTitle>
        {isContentOpen && <ShoppingListContent>
          {props.shoppingListItems.map((item) => (
            <ShoppingListItem 
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            iconId={item.iconId} 
            isAdded={props.isShoppingList}
            shoppingListName={props.shoppingListName}
            onAddItem={props.onAddItem}
            />
          ))}
        </ShoppingListContent>}
      </ShoppingListWrapper>
    )
}
