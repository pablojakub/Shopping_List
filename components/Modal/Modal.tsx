import React, { ReactPortal, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0,0,0,0.4);
  z-index: 1;
`

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 40%;
  min-height: 30%;
  width: 40%;
  height: 60%;
  background-color: white;
  border-radius: 5px;
  z-index: 2;
  padding: 16px;
  overflow-x: clip;

  @media (max-width: 700px) {
    width: 80%
  };
`

export const ButtonWrapper = styled.div`
  text-align: right;
  padding-right: 4px;
`

export const Close = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0px;
  color: #252424;
  font-weight: 800;
  font-size: 1.2rem;
`

export const Flex = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 80%;
  border: 1px solid slateblue;
`
export const Title = styled.h2`
  color: #252424;
  font-size: clamp(
    0.8rem,
    2vw + 1rem,
    2rem
  );
`

export const Label = styled.p`
  color: #252424;
  font-size: clamp(
    0.5rem,
    2vw + 1rem,
    1.2rem
  );
`
export const ArtisticOne = styled.div`
  position: absolute;
  border-radius: 100px;
  width: 85px;
  height: 85px;
  background: #1ad1b9;
  left: -40px;
  bottom: 10px;
` 

export const ArtisticTwo = styled(ArtisticOne)`
  background: #8d1222;
  left: -20px;
  bottom: -45px;
`

interface ModalProps {
  show: boolean,
  onClose: () => void
}

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
            <Label>Name</Label>
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