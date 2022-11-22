export interface ShoppingListItemType {
  id: string;
  name: string;
  price: number;
  quantity?: number;
  iconId: number;
  isAdded: boolean;
  shoppingListName: string;
}

export interface ShoppingListLayoutProps {
  isShoppingList: boolean;
  shoppingListName: string;
  shoppingListItems: ShoppingListItemType[]
}