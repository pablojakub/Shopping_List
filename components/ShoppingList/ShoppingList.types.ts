export interface ShoppingListItemType {
  id: string;
  name: string;
  price: number;
  quantity?: number;
  iconId: number;
  isAdded: boolean;
}

export interface ShoppingListProps {
  shoppingListItems: ShoppingListItemType[]
}