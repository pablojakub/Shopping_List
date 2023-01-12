export interface ShoppingListDocument {
    id: string;
    name: string;
    shoppingList: Product[];
    isDonor: boolean;
}[];

export interface Product {
    id: string;
    name: string;
    quantity: number;
    iconId: number;
    price: number;
    isAdded: boolean;
}