import React, { useState } from 'react'
import Image from 'next/image'
import { Wrapper, Name, Price } from '../../../styles/ShoppingListItem.styled'
import { SVG_IDS } from '../../../public/constants';
import { itemData, ShoppingListItemType } from './ShoppingListItem.types';


const ShoppingListItem: React.FunctionComponent<ShoppingListItemType> = ({id, name, price, quantity, iconId, isAdded, shoppingListName, onAddItem }) => {
  const [added , setIsAdded] = useState<boolean>(isAdded);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const svgPath = SVG_IDS[iconId];

  const addItemHandler = (data: itemData) => {
    if (!isEditMode) {
      onAddItem(data);
      setIsAdded(!isAdded)
    }
  }

  const onEdit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsEditMode(true);
  }

  return (
    <Wrapper onClick={() => {
      addItemHandler({id, shoppingListName, isAdded})
    }} 
    isAdded={added}
    onContextMenu={onEdit}
    >
      <Image src={`/${svgPath}`} width={60} height={60}/>
      <Name>{name}</Name>
      <Price
      editMode={isEditMode}
      disabled={!isEditMode} 
      value={`${price.toString()} zł `} />
    </Wrapper>
  )
}

export default ShoppingListItem