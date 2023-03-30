import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 30%;
`

const IconWrapper = ({ src } : {src: string}) => {
  return (
    <Wrapper>
        <img src={`./${src}`} alt={src}/>
    </Wrapper>
  )
}

export default IconWrapper