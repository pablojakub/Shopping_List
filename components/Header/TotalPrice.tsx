import React from 'react'
import { TotalPriceWrapper, TotalPriceHeader, TotalPriceAmount } from '../../styles/TotalPrice.styled';
import { TotalPriceProps } from './TotalPrice.types';


export const TotalPrice = (props: TotalPriceProps) => {

  return (
    <TotalPriceWrapper>
      <TotalPriceHeader>Total price: </TotalPriceHeader>      
      <TotalPriceAmount>{props.totalPrice} zł</TotalPriceAmount>      
    </TotalPriceWrapper>
  )
}
