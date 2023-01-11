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
  cursor: pointer;

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

export const Price = styled.input<{editMode: string, isAdded: boolean}>`
  font-size: clamp(
    0.5rem,
    1.8vw + 0.2rem,
    1rem);;
  color: white;
  border: ${props => props.editMode === 'EDIT_MODE' ? 
  props.isAdded ? 
  '1px solid #128d7d' : 
  '1px solid #8d1222' : 
  'none' };
  border-radius: 5px;
  background-color: transparent;
  text-align: center;
  padding: 0.1em;
  width: 15%;
  margin-left: auto;

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
` 

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Currency = styled.span`
  color: white;
  margin-right: auto;
` 


