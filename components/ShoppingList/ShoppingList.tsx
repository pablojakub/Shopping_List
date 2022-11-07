import React, { useState } from 'react';
import { ShoppingListProps } from './ShoppingList.types';
import ShoppingListItem from './ShoppingListItem/ShoppingListItem';
import { ShoppingListWrapper, ShoppingListContent, ShoppingListTitle, ArrowButton } from '../../styles/ShoppingList.styled'



export const ShoppingList: React.FunctionComponent<ShoppingListProps> = (props) => {
  const [isContentOpen, setisContentOpen] = useState(true);

  console.log(props.shoppingListItems);

  const showMenuHandler = () => {
    setisContentOpen(!isContentOpen);
  }

  let leftArrow = String.fromCodePoint(0x2B62);
  let downArrow = String.fromCodePoint(0x2193);


  return (
      <ShoppingListWrapper>
        <ShoppingListTitle>Products to buy 
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
            icon={item.icon} />
          ))}
        </ShoppingListContent>}
      </ShoppingListWrapper>
    )
}
