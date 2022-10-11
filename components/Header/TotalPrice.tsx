import React, { useState } from 'react'
import { TotalPriceWrapper, TotalPriceHeader, TotalPriceAmount } from '../../styles/TotalPrice.styled';


export const TotalPrice = () => {
  const [totalPrice, setTotalPrice] = useState(50);

  return (
    <TotalPriceWrapper>
      <TotalPriceHeader>Total price: </TotalPriceHeader>      
      <TotalPriceAmount>{totalPrice} zł</TotalPriceAmount>      
    </TotalPriceWrapper>
  )
}
