import Link from 'next/link';
import React, { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import styled from 'styled-components';
import { ListItem } from '../types/globalTypes';

const Wrapper = styled.div<{ editMode: boolean }>`
  --b: 100%;

  width: 100%;
  border-radius: 5px;
  min-height: 25%;
  margin-top: 8px;
  background-color: #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 11px 2px rgba(0,0,0,0.3);
  background: conic-gradient(at 50% var(--b),#d11a32 25%,#e6e6e6 0) calc(100% + var(--_i,100%))/200%;
  transition: .5s;
  border: ${props => props.editMode ? '10px' : '0px'};
  --_i: ${props => props.editMode && '0%' }; 

  div {
    font-size: clamp(1rem, 1.5vw + 1rem, 1.2rem);
    color: ${props => props.editMode && '#e6e6e6'}
  }


` 

const Circle = styled.div<{editMode: boolean}>`
  border-radius: 50%;
  background-color: ${props => props.editMode ? '#e6e6e6' : '#1ad1b9'};
  width: 20px;
  height: 20px;
  margin-right: 20px;
  margin-left: 20px;
` 

const Name = styled.div``
export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode,
  shoppingListId: string,
  shoppingListName: string,
  onDelete: (listToDelete: ListItem) => void,
}

const ListItem: React.FunctionComponent<ListItemProps> = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const onEditHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsEdit(true);
  }

  const refClickOutsideWrapper = useDetectClickOutside({
    onTriggered: () => {
      setIsEdit(false);
    },
});

const listData: ListItem = {
  id: props.shoppingListId,
  name: props.shoppingListName
}

  return (
    <Wrapper ref={refClickOutsideWrapper} onContextMenu={onEditHandler} editMode={isEdit}>
      <Circle editMode={isEdit} />
      <Link href={isEdit ? {} : '/' + listData.id}>
        <Name onClick={() => isEdit && props.onDelete({id: listData.id, name: listData.name})}>{isEdit ? 'Delete?' : listData.name}</Name></Link>
      <Circle editMode={isEdit} />
    </Wrapper>
  )
};

export default ListItem
