import styled from "styled-components"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0,0,0,0.4);
  z-index: 1;
`

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 30%;
  min-height: 30%;
  width: 30%;
  height: 60%;
  background-color: white;
  border-radius: 5px;
  z-index: 9999;
  padding: 16px;
  overflow-x: clip;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.6);

  @media (max-width: 700px) {
    width: 80%
  };
`

export const ButtonWrapper = styled.div`
  text-align: right;
  padding-right: 4px;
`

export const Close = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0px;
  color: #252424;
  font-weight: 800;
  font-size: 1.2rem;
`

export const Flex = styled.form`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 80%;
`
export const Title = styled.h2`
  color: #252424;
  font-size: clamp(
    0.8rem,
    2vw + 1rem,
    1.3rem
  );
  text-align: center;
  white-space: nowrap;
  margin: 1.2rem 0rem;
`

export const Label = styled.label`
  color: #252424;
  font-size: clamp(
    0.5rem,
    2vw + 1rem,
    1.2rem
  );
  margin: 0.5rem 0rem;
`

export const Front = styled.span`
  display: block;
  padding: 10px 32px;
  border-radius: 10px;
  background-color: #1ad1b9;
  color: #252424;
  font-size: clamp(
    0.5rem,
    2vw + 1rem,
    1.2rem
  );
  transform: translateY(-6px);
`

export const Button = styled.button`
  background-color: #118b7b;
  border-radius: 12px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  margin-top: 1em;

  &:active ${Front} {
    transform: translateY(-2px);
  }
`

export const ArtisticOne = styled.div`
  position: absolute;
  border-radius: 100px;
  width: 85px;
  height: 85px;
  background: #1ad1b9;
  left: -40px;
  bottom: 10px;
`

export const ArtisticTwo = styled(ArtisticOne)`
  background: #8d1222;
  left: -20px;
  bottom: -45px;
`

export const Select = styled.select`
  border-radius: 10px;
  border: 1px solid #4c4a4a;
  text-align: center;
  color: #252424;
  margin-top: -0.8em;
  width: 75%;
  height: 2em;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 1px solid #1ad1b9;
  } 

`

export const TextArea = styled.textarea`
  border-radius: 10px;
  border: 1px solid #4c4a4a;
  color: #252424;
  width: 75%;
  height: 6rem;
  text-align: center;

  &:focus {
    outline: none;
    border: 1px solid #1ad1b9;
  } 
`