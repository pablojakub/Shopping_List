export interface itemData {
    id: string;
    shoppingListName: string;
    isAdded: boolean;
  }

  export interface ShoppingListItemType {
    id: string;
    name: string;
    price: number;
    quantity?: number;
    iconId: number;
    isAdded: boolean;
    shoppingListName: string;
    onAddItem: (data: itemData) => void
  }