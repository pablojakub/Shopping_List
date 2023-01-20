import { fireEvent, queryByText, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe } from "vitest";
import { ShoppingListLayout } from "./ShoppingListLayout";

const shoppingListItemsMockData = [
    {
    id: 'm1',
    name: 'Milk',
    price: 5,
    quantity: 1,
    iconId: 1,
    isAdded: true,
    shoppingListName: "Home List",
    onAddItem: () => console.log(),
    onEditPrice: ()=> console.log(),
},
{
    id: 'm2',
    name: 'Cheese',
    price: 7,
    quantity: 1,
    iconId: 5,
    isAdded: true,
    shoppingListName: "Home List",
    onAddItem: () => console.log(),
    onEditPrice: ()=> console.log(),
},
{
    id: 'm3',
    name: 'Salad',
    price: 6,
    quantity: 1,
    iconId: 6,
    isAdded: true,
    shoppingListName: "Home List",
    onAddItem: () => console.log(),
    onEditPrice: ()=> console.log(),
},
]

describe('Testing shoppingListLayoutComponent', () => {
    it('Should properly display shoppingItems', async () => {
        const { debug, getByText, getByRole, queryByTestId, getByTestId, getByDisplayValue } = render(<ShoppingListLayout isShoppingList onEditPrice={() => console.log()} onAddItem={() => console.log()} shoppingListItems={shoppingListItemsMockData} shoppingListName={'HomeList'} />)

        getByText('Products to buy');
        getByText('Milk');
        getByText('Cheese');
        getByText('Salad');

        const toggleBtn = getByRole('button');
        userEvent.click(toggleBtn)

        expect(queryByTestId('shoppingList_content')).toBeNull();

        userEvent.click(toggleBtn);
        queryByTestId('shoppingList_content');

        const wrapperBtn = getByTestId('m1')
        fireEvent.contextMenu(wrapperBtn)
        getByTestId('zipdisk');
        const priceInput = getByTestId('m1-priceTest')
        expect(getComputedStyle(priceInput).borderColor).toBe('#128d7d');

        fireEvent.change(priceInput, { target: { value: 123 }})
        getByDisplayValue(123);

        fireEvent.change(priceInput, { target: { value: 'abc' }})
        getByDisplayValue(123);

        userEvent.clear(priceInput)
        getByDisplayValue(123);

        userEvent.click(getByTestId('shoppingList_content'));
        getByDisplayValue(5);
    })
})