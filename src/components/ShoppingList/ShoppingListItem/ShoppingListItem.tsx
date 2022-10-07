import React from 'react'
import styled from 'styled-components'
import { ShoppingListItemType } from '../ShoppingList.types'

const Wrapper = styled.div`
  min-width: 150px;
  width: 150px;
  height: 150px;
  background-color: #1ad1b9;
  border-radius: 5px;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3em;

  @media(max-width: 700px) {
    width: 75px;
    height: 75px;
    min-width: 75px;
    gap: 0px;
  }
`

const Name = styled.div`
  font-size: clamp(
    0.5rem,
    1.5vw + 0.2rem,
    1rem);
  font-weight: 700;
  color: white;
  margin-top: 0.3em;
`

const Price = styled.div`
  font-size: clamp(
    0.5rem,
    1.8vw + 0.2rem,
    1rem);;
  color: white;
  padding: 0.1em;
`

const ShoppingListItem: React.FunctionComponent<ShoppingListItemType> = ({id, name, price, quantity, Icon}) => {
  return (
    <Wrapper onClick={() => console.log("yeah!")}>
      <Icon width={window.visualViewport!.width > 700 ? 60 : 30} height={60} fill="white"/>
      <Name>{name}</Name>
      <Price>{price} zł</Price>
    </Wrapper>
  )
}

export default ShoppingListItem