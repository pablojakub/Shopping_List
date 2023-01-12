import { Product, ShoppingListDocument } from "../types/globalTypes";

type onAddUnknownItemFnType = (newItem: Product) => void;
type onAddNewListFnType = (newList: NewList) => void;

export interface ModalProps {
    show: boolean,
    onClose: () => void;
    onAddUnknownItem?: onAddUnknownItemFnType
    onAddNewList?: onAddNewListFnType
}

export type NewList = Pick<ShoppingListDocument, 'id' | 'name'>

export type ActionType = 'PRODUCT' | 'LIST'
