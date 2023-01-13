import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
    background-color: #d11a32;
    width: 106%;
    margin-left: -16px;
    margin-top: -16px;
    padding: 8px;
    color: white;
    text-align: center;
    font-size: clamp(
    0.5rem,
    2vw + 1rem,
    1.2rem
  );
`

export const ErrorTag = () => {
  return (
    <ErrorWrapper>Unproperly filled form</ErrorWrapper>
  )
}
