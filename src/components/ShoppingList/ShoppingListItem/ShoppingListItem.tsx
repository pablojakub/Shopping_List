import React from 'react'
import styled from 'styled-components'
import { ShoppingListItemType } from '../ShoppingList.types'

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: #1ad1b9;
  border-radius: 5px;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2em;
`

const Name = styled.span`
  font-size:1rem;
  font-weight: 700;
  color: white;
`

const ShoppingListItem: React.FunctionComponent<ShoppingListItemType> = ({id, name, price, quantity, Icon}) => {
  return (
    <Wrapper onClick={() => console.log("yeah!")}>
      <Icon width={60} height={60} fill="white"/>
      <Name>{name}</Name>


    </Wrapper>
  )
}

export default ShoppingListItem