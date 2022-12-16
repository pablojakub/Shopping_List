type onAddUnknownItemFnType = (newItem: newItem) => void;

export interface ModalProps {
    show: boolean,
    onClose: () => void;
    onAddUnknownItem: onAddUnknownItemFnType
}

export interface newItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    iconId: number;
    isAdded: boolean;
}

