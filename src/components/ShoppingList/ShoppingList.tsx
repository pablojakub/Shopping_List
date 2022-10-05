import React from 'react';
import { ShoppingListItemType } from './ShoppingList.types';
import  {ReactComponent as Bread} from '../../icons/breadbread.svg'
import {ReactComponent as Milk} from '../../icons/milkmilk.svg'
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
  }
];

const ShoppingListWrapper = styled.section`
  display: flex;
  gap: 32px;
  flex-direction: column;
  width: 50%;
  align-content: center;
  justify-content: center;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  
`

const ShoppingListTitle = styled.h2`
  color: white;
  align-self: center;
`;

const ShoppingListContent = styled.div`
  align-self: center;
  display: grid;
  width: 50%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
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
            Icon={item.Icon} />
          ))}
        </ShoppingListContent>
      </ShoppingListWrapper>
    )
}
