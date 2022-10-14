import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid red;
  border-radius: 5px;
  min-height: 25%;
  margin-top: 8px;
  background-color: white;
`

export interface ListItemProps {
  children: React.ReactNode
}

const ListItem: React.FunctionComponent<ListItemProps> = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
};

export default ListItem
