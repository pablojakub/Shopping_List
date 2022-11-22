import React, { useState } from 'react'
import Image from 'next/image'
import { ShoppingListItemType } from '../ShoppingList.types'
import { Wrapper, Name, Price } from '../../../styles/ShoppingListItem.styled'
import { SVG_IDS } from '../../../public/constants';
import { useRouter } from 'next/router'

interface itemData {
  id: string;
  shoppingListName: string;
  isAdded: boolean;
}

const ShoppingListItem: React.FunctionComponent<ShoppingListItemType> = ({id, name, price, quantity, iconId, isAdded, shoppingListName}) => {
  const [added , setIsAdded] = useState<boolean>(isAdded)
  const svgPath = SVG_IDS[iconId];

  const addItemHandler = async (data: itemData) => {
    const result = await fetch('/api/editShoppingItem', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
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