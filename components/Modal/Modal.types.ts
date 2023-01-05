type onAddUnknownItemFnType = (newItem: NewItem) => void;
type onAddNewListFnType = (newList: NewList) => void;

export interface ModalProps {
    show: boolean,
    onClose: () => void;
    onAddUnknownItem?: onAddUnknownItemFnType
    onAddNewList?: onAddNewListFnType
}

export interface NewItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    iconId: number;
    isAdded: boolean;
} 

export type NewList = Pick<NewItem, 'id' | 'name'>

export type ActionType = 'PRODUCT' | 'LIST'
