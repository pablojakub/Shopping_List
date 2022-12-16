export interface itemData {
    id: string;
    shoppingListName: string;
    isAdded?: boolean;
    price?: number;
  }

  type onEditItemFnType = (data: itemData) => void

  export interface ShoppingListItemType {
    id: string;
    name: string;
    price: number;
    quantity?: number;
    iconId: number;
    isAdded: boolean;
    shoppingListName: string;
    onAddItem: onEditItemFnType;
    onEditPrice: onEditItemFnType;
  }

