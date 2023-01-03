type onAddUnknownItemFnType = (newItem: newItem) => void;
type onAddNewListFnType = (newList: {id: string, name: string }) => void;

export interface ModalProps {
    show: boolean,
    onClose: () => void;
    onAddUnknownItem?: onAddUnknownItemFnType
    onAddNewList?: onAddNewListFnType
}

export interface newItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    iconId: number;
    isAdded: boolean;
}

export type ActionType = 'PRODUCT' | 'LIST'
