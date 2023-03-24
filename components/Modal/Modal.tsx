/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useSession } from 'next-auth/react';
import React, { FormEvent, ReactPortal, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { SVG_IDS } from '../../public/constants';
import { ErrorTag } from '../Layout/ErrorTag';
import Input from '../Layout/Input/Input';
import { Overlay, ArtisticOne, ArtisticTwo, Button, ButtonWrapper, Close, Flex, Front, Label, Title, Wrapper, Select, TextArea } from './Modal.styled'
import { ActionType, ModalProps } from './Modal.types';

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
 const [topic, setTopic] = useState('Grocery')
 const nameInputRef = useRef(null);
 const priceInputRef = useRef(null);
 const quantityInputRef = useRef(null);
 const [error, setIsError] = useState(false);
 const session = useSession();

 useEffect(() => {
  setIsBrowser(true)

 },[])

 const submitHandler = (event: React.FormEvent, type: ActionType) => {
  event.preventDefault();

  switch(type) {
    case 'PRODUCT': 
    if (nameInputRef.current && priceInputRef.current && quantityInputRef.current) {

      const preparedNewItemForBackend = {
        id: crypto.randomUUID(),
        name: nameInputRef.current['value'],
        price: parseInt(priceInputRef.current['value']),
        quantity: parseInt(quantityInputRef.current['value']),
        iconId: findIconByName(nameInputRef.current['value']),
        isAdded: true,
      }
      onAddUnknownItem?.(preparedNewItemForBackend);
      onClose();
      setIsError(false);
    }
    setIsError(true)
    break;
    case 'LIST': 
    if(nameInputRef.current) {
      if(nameInputRef.current['value'] !== '') {
        onAddNewList?.({ id: topic, name: nameInputRef.current['value'], email: session.data?.user.email as string });
        onClose();
        setIsError(false);
      }
      setIsError(true);
      return;
    } 
    break;
  }
 }

 const defaultValuesByTopic = {
  Grocery: 'It contains food, vegatables drinks etc.',
  Garden: 'Suitable for some gardening stuff',
  Chemistry: 'Drugs, Vitamins, medical devices. Anything related to it.',
}

  const modalContent = show
    ? (
      <Overlay>
        <Wrapper>
          {error && <ErrorTag />}
          <ButtonWrapper>
            <Close onClick={onClose}>X</Close>
          </ButtonWrapper>
          { onAddNewList 
          ? <Flex onSubmit={(event: FormEvent) => submitHandler(event, 'LIST')}>
          <Title>Add new shopping list</Title>
          <Select value={topic} onChange={(e) => {
            setIsError(false)
            setTopic(e.target.value)
          }}>
            <option value='Grocery'>Grocery</option>
            <option value='Garden'>Garden</option>
            <option value='Chemistry'>Chemistry</option>
          </Select>
          <Label>Name:</Label>
          <Input ref={nameInputRef} type={'text'}></Input>
          <Label>Description:</Label>
          <TextArea key={topic} defaultValue={defaultValuesByTopic[topic as keyof typeof defaultValuesByTopic]}></TextArea>
          <Button type='submit'>
            <Front>
            Confirm
            </Front>
          </Button>
        </Flex> 
        : 
        <Flex onSubmit={(event: FormEvent) => submitHandler(event, 'PRODUCT')}>
            <Title>Add new product</Title>
            <Label>Name:</Label>
            <Input ref={nameInputRef} type={'text'}></Input>
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
        }
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