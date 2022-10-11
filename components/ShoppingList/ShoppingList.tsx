import React, { useState } from 'react';
import { ShoppingListItemType } from './ShoppingList.types';
import  Bread from '../../public/icons/breadbread.svg'
import Milk from '../../public/icons/tetrapack.svg'
import Tomato from '../../public/icons/tomato.svg'
import ShoppingListItem from './ShoppingListItem/ShoppingListItem';
import { ShoppingListWrapper, ShoppingListContent, ShoppingListTitle, ArrowButton } from '../../styles/ShoppingList.styled'

const DUMMY_PRODUCT_ITEMS: ShoppingListItemType[] = [
  {
    id: 'bread',
    name: 'Bread',
    price: 4.00,
    quantity: 1,
    Icon: Bread
  },
  {
    id: 'milk',
    name: 'Milk',
    price: 3.70,
    quantity: 1,
    Icon: Milk
  },
  {
    id: 'breadrool',
    name: 'Breadroll',
    price: 1,
    quantity: 1,
    Icon: Bread
  },
  {
    id: 'tomato',
    name: 'Tomato',
    price: 1,
    quantity: 1,
    Icon: Tomato
  }
];


export const ShoppingList: React.FunctionComponent = () => {
  const [isContentOpen, setisContentOpen] = useState(true);

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
          {DUMMY_PRODUCT_ITEMS.map((item) => (
            <ShoppingListItem 
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            Icon={item.Icon} />
          ))}
        </ShoppingListContent>}
      </ShoppingListWrapper>
    )
}
