import { NewProductWrapper, TooltipText } from "./AddUnknownProductComponent.styled";
import React from 'react';


const AddUnknownProductComponent: React.FC = () => {
    return (
        <NewProductWrapper isAdded> 
            <svg xmlns="http://svgjs.com/svgjs" xmlnsXlink="http://www.w3.org/1999/xlink" width="60" height="60"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 16 16"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v14M1 8h14" className="colorStroke000 svgStroke"/></svg></svg>
            <TooltipText>Didn't found item? Add new one</TooltipText>
        </NewProductWrapper>
    )
}

export default AddUnknownProductComponent;