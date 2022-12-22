import React, { ReactPortal, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { SVG_IDS } from '../../public/constants';
import { Overlay, ArtisticOne, ArtisticTwo, Button, ButtonWrapper, Close, Flex, Front, Input, Label, Title, Wrapper, Select } from './Modal.styled'
import { ModalProps } from './Modal.types';



const uuidv4 = () => {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, (c: number) =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
} 

const findIconByName = (name: string): number => {
  const iconNames = Object.values(SVG_IDS);
  const findedName = iconNames.filter(iconName => iconName.includes(name.toLowerCase().trim()))

  if (findedName) {
    const iconId = Object.keys(SVG_IDS).find(key => SVG_IDS[key as unknown as number] === findedName[0]);
    return iconId ? parseInt(iconId) : 99
  }
  return 99;
}

const Modal = ({show, onClose, onAddUnknownItem, onAddNewList } : ModalProps): ReactPortal | null => {
 const [isBrowser, setIsBrowser] = useState(false);
 const nameInputRef = useRef(null);
 const priceInputRef = useRef(null);
 const quantityInputRef = useRef(null);

 useEffect(() => {
  setIsBrowser(true)

 },[])

 const submitHandler = (event: React.FormEvent) => {
  event.preventDefault();

  if (nameInputRef.current && priceInputRef.current && quantityInputRef.current) {

    const preparedNewItemForBackend = {
      id: uuidv4(),
      name: nameInputRef.current['value'],
      price: parseInt(priceInputRef.current['value']),
      quantity: parseInt(quantityInputRef.current['value']),
      iconId: findIconByName(nameInputRef.current['value']),
      isAdded: true,
    }
    onAddUnknownItem?.(preparedNewItemForBackend);
  }
  onClose();
 }
  const modalContent = show
    ? (
      <Overlay>
        <Wrapper>
          <ButtonWrapper>
            <Close onClick={onClose}>X</Close>
          </ButtonWrapper>
          <Flex onSubmit={submitHandler}>
            <Title>{onAddNewList ? 'Add new shopping list' : 'Add new product' }</Title>
            <Label>Name:</Label>
            {onAddNewList 
            ? <Select>
              <option>Grocery</option>
              <option>Garden</option>
              <option>Chemistry</option>
            </Select>
            : <Input ref={nameInputRef} type={'text'}></Input> }
            <Label>Price:</Label>
            <Input ref={priceInputRef} type={'number'} min={0}></Input>
            <Label>Quantity:</Label>
            <Input ref={quantityInputRef} type={'number'} min={1}></Input>
            <Button type='submit'>
              <Front>
              Confirm
              </Front>
            </Button>
          </Flex> 
        <ArtisticOne />
        <ArtisticTwo />
        </Wrapper>
      </Overlay>
    )
    : null;

    if (isBrowser) { 
      return ReactDOM.createPortal(modalContent, document.getElementById('modal')!)
    } else {
      return null
    }
}

export default Modal