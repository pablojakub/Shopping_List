import React, { ReactPortal, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

export const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  z-index: 1;
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
        <button onClick={handleClose}>Close</button>
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