import React from 'react';
import { ShoppingListItemType } from './ShoppingList.types';
import  bread from '../../icons/bread.png';
import milk from '../../icons/milk.png'
import styled from 'styled-components';
import ShoppingListItem from './ShoppingListItem/ShoppingListItem';

const DUMMY_PRODUCT_ITEMS: ShoppingListItemType[] = [
  {
    id: 'bread',
    name: 'Bread',
    price: 4.00,
    quantity: 1,
    image: bread
  },
  {
    id: 'milk',
    name: 'Milk',
    price: 3.70,
    quantity: 1,
    image: bread
  }
];

const ShoppingListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid black;
  align-content: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`

const ShoppingListTitle = styled.h3`
  color: white;
  align-self: center;
`;

const ShoppingListContent = styled.div`
  align-self: center;
  display: grid;
`;

export const ShoppingList: React.FunctionComponent = () => {
  return (
      <ShoppingListWrapper>
        <ShoppingListTitle>Products to buy</ShoppingListTitle>
        <ShoppingListContent>
          {DUMMY_PRODUCT_ITEMS.map((item) => (
            <ShoppingListItem 
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            image={item.image} />
          ))}
        </ShoppingListContent>
      </ShoppingListWrapper>
    )
}
