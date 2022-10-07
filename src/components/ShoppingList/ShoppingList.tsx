import React, { useState } from 'react';
import { ShoppingListItemType } from './ShoppingList.types';
import  {ReactComponent as Bread} from '../../icons/breadbread.svg'
import {ReactComponent as Milk} from '../../icons/tetrapack.svg'
import {ReactComponent as Tomato} from '../../icons/tomato.svg'
import styled from 'styled-components';
import ShoppingListItem from './ShoppingListItem/ShoppingListItem';

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

const ShoppingListWrapper = styled.section`
  display: flex;
  gap: 16px;
  flex-direction: column;
  width: 60%;
  align-content: center;
  justify-content: center;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  
  @media(max-width: 700px) {
    width: 90%
  }
`

const ShoppingListTitle = styled.h2`
  color: white;
  font-size: clamp(1rem, 1vw + 1rem, 1.5rem);
  align-self: center;
`;

const ShoppingListContent = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 8px;
  flex-wrap: wrap;
`;

const ArrowButton = styled.button`
  background: none;
	color: inherit;
	border: none;
	padding-left: 5px;
	font: inherit;
	cursor: pointer;
	outline: inherit;


`

export const ShoppingList: React.FunctionComponent = () => {
  const [isContentOpen, setisContentOpen] = useState(true)

  let leftArrow = String.fromCodePoint(62);

  const showMenuHandler = () => {
    setisContentOpen(!isContentOpen);
  }

  return (
      <ShoppingListWrapper>
        <ShoppingListTitle>Products to buy 
          <ArrowButton onClick={showMenuHandler}>{leftArrow}</ArrowButton>
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
