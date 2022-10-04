import React from 'react'
import styled from 'styled-components'
import { ShoppingListItemType } from '../ShoppingList.types'

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: #1ad1b9;
  border-radius: 5px;
  outline: none;
`

const ShoppingListItem: React.FunctionComponent<ShoppingListItemType> = (props) => {
  return (
    <Wrapper onClick={() => console.log("yeah!")}>

    </Wrapper>
  )
}

export default ShoppingListItem