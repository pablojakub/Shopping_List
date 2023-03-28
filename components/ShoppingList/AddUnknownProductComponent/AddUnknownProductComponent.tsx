import { NewProductWrapper, TooltipText } from "./AddUnknownProductComponent.styled";
import React from 'react';

interface AddUnknownProps {
    onOpenModal: () => void;
    isOnListPage: boolean;
}


const AddUnknownProductComponent: React.FC<AddUnknownProps> = (props: AddUnknownProps) => {
    return (
        <NewProductWrapper isAdded onClick={props.onOpenModal} isOnListPage={props.isOnListPage}> 
                <svg xmlns="http://svgjs.com/svgjs" xmlnsXlink="http://www.w3.org/1999/xlink"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="none" stroke="#fff" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v14M1 8h14" className="colorStroke000 svgStroke"/></svg></svg>
                <TooltipText>Didn't found item? Add new one</TooltipText>
        </NewProductWrapper>
    )
}

export default AddUnknownProductComponent;