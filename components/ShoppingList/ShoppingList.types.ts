import { FunctionComponent, SVGProps } from "react";

export interface ShoppingListItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}