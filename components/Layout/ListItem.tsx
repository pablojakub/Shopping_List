import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  min-height: 25%;
  margin-top: 8px;
  background-color: #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 11px 2px rgba(0,0,0,0.3);

  a {
    font-size: clamp(1rem, 1.5vw + 1rem, 1.2rem);
  }
` 

const Circle = styled.div`
  border-radius: 50%;
  background-color: #1ad1b9;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  margin-left: 20px;
`

export interface ListItemProps {
  children: React.ReactNode
}

const ListItem: React.FunctionComponent<ListItemProps> = (props) => {
  return (
    <Wrapper>
      <Circle />
      {props.children}
      <Circle />
    </Wrapper>
  )
};

export default ListItem
