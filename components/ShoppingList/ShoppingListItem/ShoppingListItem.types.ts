export interface itemData {
    id: string;
    shoppingListName: string;
    isAdded?: boolean;
    price?: number;
  }

  export interface ShoppingListItemType {
    id: string;
    name: string;
    price: number;
    quantity?: number;
    iconId: number;
    isAdded: boolean;
    shoppingListName: string;
    onAddItem: (data: itemData) => void;
    onEditPrice: (data: itemData) => void;
  }