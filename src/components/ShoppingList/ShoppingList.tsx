import React from 'react';
import { ShoppingListItem } from './ShoppingList.types';
import  bread from '../../icons/bread.png';
import milk from '../../icons/milk.png'
import styled from 'styled-components';

const DUMMY_PRODUCT_ITEMS: ShoppingListItem[] = [
  {
    id: 'bread',
    name: 'Bread',
    price: 4.00,
    quantinty: 1,
    image: bread
  },
  {
    id: 'milk',
    name: 'Milk',
    price: 3.70,
    quantinty: 1,
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
`;

export const ShoppingList: React.FunctionComponent = () => {
  return (
      <ShoppingListWrapper>
        <ShoppingListTitle>Products to buy</ShoppingListTitle>
        <ShoppingListContent>
          asdsad
        </ShoppingListContent>
      </ShoppingListWrapper>
    )
}
