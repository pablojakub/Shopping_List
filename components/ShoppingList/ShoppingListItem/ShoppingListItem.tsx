import React from 'react'
import Image from 'next/image'
import { ShoppingListItemType } from '../ShoppingList.types'
import { Wrapper, Name, Price } from '../../../styles/ShoppingListItem.styled'
import { SVG_IDS } from '../../../public/constants';

const ShoppingListItem: React.FunctionComponent<ShoppingListItemType> = ({id, name, price, quantity, icon, isAdded}) => {
  const svgPath = SVG_IDS[icon];

  return (
    <Wrapper onClick={() => console.log("yeah!")} isAdded={isAdded}>
      <Image src={`/${svgPath}`} width={60} height={60}/>
      <Name>{name}</Name>
      <Price>{price} zł</Price>
    </Wrapper>
  )
}

export default ShoppingListItem