import styled from "styled-components"

export const Wrapper = styled.div<{isAdded: boolean}>`
  min-width: 150px;
  width: 150px;
  height: 150px;
  background-color: ${props => props.isAdded ? '#1ad1b9' : '#d11a32'} ;
  border-radius: 5px;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3em;

  @media(max-width: 700px) {
    width: 75px;
    height: 75px;
    min-width: 75px;
    gap: 0px;
  }
`

export const Name = styled.div`
  font-size: clamp(
    0.5rem,
    1.5vw + 0.2rem,
    1rem);
  font-weight: 700;
  color: white;
  margin-top: 0.3em;
`

export const Price = styled.div`
  font-size: clamp(
    0.5rem,
    1.8vw + 0.2rem,
    1rem);;
  color: white;
  padding: 0.1em;
`
