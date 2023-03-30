import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside';
import Image from 'next/image'
import { Zipdisk } from '../../Layout/Zipdisk';
import { Wrapper, Name, Price, Currency, PriceWrapper } from '../../../styles/ShoppingListItem.styled'
import { SVG_IDS } from '../../../public/constants';
import { itemData, ShoppingListItemState, ShoppingListItemType } from './ShoppingListItem.types';
import { assertState } from '../../utils/assertFunctions';
import IconWrapper from '../../Layout/IconWrapper';


const ShoppingListItem: React.FunctionComponent<ShoppingListItemType> = ({id, name, price, quantity, iconId, isAdded, shoppingListName, onAddItem, onEditPrice }) => {
  const [state, setState ] = useState<ShoppingListItemState>({ type: 'NO_EDIT_MODE', price: price, isAdded: isAdded });

  const svgPath = SVG_IDS[iconId];

  const inputRef = useRef<HTMLInputElement>(null);

  const refClickOutsideWrapper = useDetectClickOutside({
    onTriggered: () => {
      if (state.type === 'EDIT_MODE') {
        setState({ type: 'NO_EDIT_MODE', price: price, isAdded: isAdded })
      }
    },
});

  const addItemHandler = (data: itemData) => {
    if (state.type !== 'EDIT_MODE') {
      setState({ type: 'LOADING_MODE' })
      onAddItem(data);
      setState({ type: 'NO_EDIT_MODE', price: price, isAdded: !isAdded })
    }
  }

  const onEdit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if(state.type !== "LOADING_MODE") {
      setState({ type: 'EDIT_MODE', price: state.price, isAdded: state.isAdded })
    
      if (inputRef.current !== null) {
        inputRef.current.focus();
      }
    }
  }

  const editPrice = useCallback(() => {
    assertState(state, 'EDIT_MODE');
    if (state.price === price) {
      return;
    }
    onEditPrice({
      id: id,
      shoppingListName: shoppingListName,
      price: state.price
    });
    
    setState({ type: 'NO_EDIT_MODE', price: state.price, isAdded: isAdded })
  }, [state]);

  return (
    <>
    {state.type !== 'LOADING_MODE' && <Wrapper data-testid={id} ref={refClickOutsideWrapper} onClick={() => {
      addItemHandler({id, shoppingListName, isAdded})
    }} 
    isAdded={isAdded}
    onContextMenu={onEdit}
    >
      <IconWrapper src={svgPath}/>

      <Name>{name}</Name>
      <PriceWrapper>
        <Price
        data-testid={`${id}-priceTest`}
        ref={inputRef}
        type='number'
        min={1}
        isAdded={state.isAdded}
        editMode={state.type}
        disabled={state.type !== 'EDIT_MODE'} 
        value={`${state.price}`}
        onChange={(e) => {
          const value = e.target.value
          if(Number.isNaN(parseInt(value))) {
            return
          } else { 
            setState({ type: 'EDIT_MODE', price: parseInt(value), isAdded: isAdded})
          }
          }}
          
          />
          <Currency>zł</Currency>
      </PriceWrapper>
      
    </Wrapper>}
    {state.type === 'EDIT_MODE' && <Zipdisk onSave={editPrice}/> }
    </>
    
  )
}

export default ShoppingListItem