import React, { ReactPortal, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Overlay, ArtisticOne, ArtisticTwo, Button, ButtonWrapper, Close, Flex, Front, Input, Label, Title, Wrapper  } from './Modal.styled'

interface ModalProps {
  show: boolean,
  onClose: () => void
};

const Modal = ({show, onClose} : ModalProps): ReactPortal => {
 const [isBrowser, setIsBrowser] = useState(false);

 useEffect(() => {
  setIsBrowser(true)

 },[])

 const handleClose = () => {
    onClose();
 }

  const modalContent = show
    ? (
      <Overlay>
        <Wrapper>
          <ButtonWrapper>
            <Close onClick={handleClose}>X</Close>
          </ButtonWrapper>
          <Flex>
            <Title>Add new product</Title>
            <Label>Name:</Label>
            <Input type={'text'}></Input>
            <Label>Price:</Label>
            <Input type={'number'} min={0}></Input>
            <Label>Quantity:</Label>
            <Input type={'number'} min={1}></Input>
            <Button type='button'>
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
      return ReactDOM.createPortal(modalContent, document.getElementById('modal'))
    } else {
      return null
    }
}

export default Modal