import React, { useState } from 'react'
import styled from "styled-components";

const InputWrapper = styled.input<{ error: boolean }>`
  border-radius: 10px;
  border: 1px solid ${props => props.error 
    ? '#d11a32'
    : '#4c4a4a' };
  text-align: center;
  color: #252424;
  margin-top: -0.8em;

  &:focus {
    outline: none;
    border: 1px solid #1ad1b9;
  } 

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { 
    type: 'number' | 'text',
    min?: number,
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const [error, setError] = useState(false);

  return (
    <InputWrapper 
    ref={ref} 
    type={props.type} 
    error={error} onChange={(e) => {
        if (!e.target.value || e.target.value === '') {
            setError(true);
        } else {
            setError(false);
        }
    }  
    }
    min={props.min}
    onBlur={e => !e.target.value ? setError(true) : setError(false) } 
    placeholder={props.placeholder}
    />
  )
})

export default Input