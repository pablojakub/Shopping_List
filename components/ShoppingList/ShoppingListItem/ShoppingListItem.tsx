import React from 'react'
import { ShoppingListItemType } from '../ShoppingList.types'
import { Wrapper, Name, Price } from '../../../styles/ShoppingListItem.styled'


const ShoppingListItem: React.FunctionComponent<ShoppingListItemType> = ({id, name, price, quantity, Icon}) => {
  return (
    <Wrapper onClick={() => console.log("yeah!")}>
      {/* <Icon width={60} height={60} fill="white"/> */}
      <Name>{name}</Name>
      <Price>{price} zł</Price>
    </Wrapper>
  )
}

export default ShoppingListItem