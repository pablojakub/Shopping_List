import React from 'react';
import { LoadingSpinner, SpinnerContainer } from '../../styles/FullPageLoadingSpinner.styled';

export default function FullPageLoadingSpinner() {
  return (
    <SpinnerContainer>
      <LoadingSpinner>
      </LoadingSpinner>
    </SpinnerContainer>
  )
}