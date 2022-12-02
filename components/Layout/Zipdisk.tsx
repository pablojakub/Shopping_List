import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    transform: translateX(125%);
` 

export interface ZipDiskProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}

export const Zipdisk: React.FunctionComponent<ZipDiskProps> = (props) => {
    return (
    <Wrapper><svg width="30px" height="30px" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" enable-background="new 0 0 76.00 76.00" xmlSpace="preserve">
	<path fill="#ffffff" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 20,20L 50.25,20L 56,25.75L 56,56L 20,56L 20,20 Z M 52,27.25L 48.75,24L 48,24L 48,37L 28,37L 28,24L 24,24L 24,52L 52,52L 52,27.25 Z M 39,24L 39,34L 44,34L 44,24L 39,24 Z "/>
    </svg></Wrapper>
    );
  };