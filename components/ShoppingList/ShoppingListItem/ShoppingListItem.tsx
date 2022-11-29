import React, { useRef, useState } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside';
import Image from 'next/image'
import { Zipdisk } from '../../Layout/Zipdisk';
import { Wrapper, Name, Price } from '../../../styles/ShoppingListItem.styled'
import { SVG_IDS } from '../../../public/constants';
import { itemData, ShoppingListItemType } from './ShoppingListItem.types';


const ShoppingListItem: React.FunctionComponent<ShoppingListItemType> = ({id, name, price, quantity, iconId, isAdded, shoppingListName, onAddItem }) => {
  const [added , setIsAdded] = useState<boolean>(isAdded);
  const [priceState, setPrice] = useState<number>(price);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const svgPath = SVG_IDS[iconId];

  const inputRef = useRef<HTMLInputElement>(null);

  const refClickOutsideWrapper = useDetectClickOutside({
    onTriggered: () => {
        setIsEditMode(false);
    },
});

  const addItemHandler = (data: itemData) => {
    if (!isEditMode) {
      onAddItem(data);
      setIsAdded(!isAdded)
    }
  }

  const onEdit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsEditMode(true);
    
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }

  return (
    <Wrapper ref={refClickOutsideWrapper} onClick={() => {
      addItemHandler({id, shoppingListName, isAdded})
    }} 
    isAdded={added}
    onContextMenu={onEdit}
    >
      <Zipdisk />
      <Image src={`/${svgPath}`} width={60} height={60}/>
      <Name>{name}</Name>
      <Price
      ref={inputRef}
      type='number'
      min={1}
      isAdded={isAdded}
      editMode={isEditMode}
      disabled={!isEditMode} 
      placeholder={`${Number.isNaN(priceState) ? 0 : priceState} zł`}
      onChange={(e) => {
        let value = e.target.value
        if(Number.isNaN(value)) {
          return
        } else { 
          setPrice(parseInt(value))
        }
        }}/>
    </Wrapper>
  )
}

export default ShoppingListItem