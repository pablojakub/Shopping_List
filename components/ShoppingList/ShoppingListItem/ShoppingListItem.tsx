import React, { useState } from 'react'
import Image from 'next/image'
import { Wrapper, Name, Price } from '../../../styles/ShoppingListItem.styled'
import { SVG_IDS } from '../../../public/constants';
import { itemData, ShoppingListItemType } from './ShoppingListItem.types';



const ShoppingListItem: React.FunctionComponent<ShoppingListItemType> = ({id, name, price, quantity, iconId, isAdded, shoppingListName, onAddItem }) => {
  const [added , setIsAdded] = useState<boolean>(isAdded)
  const svgPath = SVG_IDS[iconId];

  const addItemHandler = (data: itemData) => {
    onAddItem(data);
    setIsAdded(!isAdded)
  }

  return (
    <Wrapper onClick={() => {
      addItemHandler({id, shoppingListName, isAdded})
    }} 
    isAdded={added}>
      <Image src={`/${svgPath}`} width={60} height={60}/>
      <Name>{name}</Name>
      <Price>{price} zł</Price>
    </Wrapper>
  )
}

export default ShoppingListItem