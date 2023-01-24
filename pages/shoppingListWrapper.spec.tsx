import { render } from "@testing-library/react";
import { describe } from "vitest";
import ListItem from "../components/Layout/ListItem";
import App from './index';



const mockAppPros= [{
        id: '',
        name: '',
        shoppingList: [],
        isDonor: false,
    }]


describe('Main page testing', () => {
    it('Should show prompt when there is no shopping list', () => {
        const { debug } = render(<ListItem></ListItem>)
        debug();
    })
})