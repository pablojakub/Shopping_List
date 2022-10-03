import React, { useState } from 'react'
import styled from 'styled-components';

const TotalPriceWrapper = styled.div`
  background-color: #1ad1b9;
  border-radius: 5px;
  width: 11rem;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2em;
`
const TotalPriceHeader = styled.h3`
  color: white;
` 

const TotalPriceAmount = styled.h3`
  color: white;
`


export const TotalPrice = () => {
  const [totalPrice, setTotalPrice] = useState(50);



  return (
    <TotalPriceWrapper>
      <TotalPriceHeader>Total price: </TotalPriceHeader>      
      <TotalPriceAmount>{totalPrice} zł</TotalPriceAmount>      
    </TotalPriceWrapper>
  )
}
