import React from 'react'
import Image from 'next/image'
import { ShoppingListItemType } from '../ShoppingList.types'
import { Wrapper, Name, Price } from '../../../styles/ShoppingListItem.styled'
import { SVG_IDS } from '../../../public/constants';
import { useRouter } from 'next/router'

interface itemData {
  id: string;
  shoppingId: string
}

const ShoppingListItem: React.FunctionComponent<ShoppingListItemType> = ({id, name, price, quantity, iconId, isAdded}) => {
  const svgPath = SVG_IDS[iconId];

  const router = useRouter();
  const { shoppingListTypeId } = router.query;

  const addItemHandler = (data: itemData) => {
    console.log(data.id);
    console.log(data.shoppingId)
  }

  return (
    <Wrapper onClick={() => {
      const shoppingId: string = shoppingListTypeId !== undefined ?
       shoppingListTypeId as string :
        '' as string
      addItemHandler({id, shoppingId})
    
    }} isAdded={isAdded}>
      <Image src={`/${svgPath}`} width={60} height={60}/>
      <Name>{name}</Name>
      <Price>{price} zł</Price>
    </Wrapper>
  )
}

export default ShoppingListItem