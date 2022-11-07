import { FunctionComponent, SVGProps } from "react";

export interface ShoppingListItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  icon: number;
}

export interface ShoppingListProps {
  shoppingListItems: ShoppingListItemType[]
}