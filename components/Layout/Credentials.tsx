import React from 'react'
import styled from 'styled-components'
import { JsxElement } from 'typescript'

export const Wrapper = styled.div`
    position: absolute;
    bottom: 10px;
    left: 40%;
`

export const Text = styled.p`
    color: #252424;
  font-size: clamp(
    0.5rem,
    2vw + 1rem,
    1.2rem
  );
`

const Credentials = ({ email, children }: {email: string, children: React.ReactNode}) => {
  return (
    <Wrapper>
        <Text>
        {`Signed in as a ${email}`}
        </Text>
        { children }
        </Wrapper>
  )
}

export default Credentials