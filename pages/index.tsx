import React from 'react';
import { Header } from '../components/Header/Header';
import { ShoppingList } from '../components/ShoppingList/ShoppingList';
import GlobalStyles from '../styles/GlobalStyles';

export default function App() {
  return (
    <>
    <Header/>
    <ShoppingList/>
    <GlobalStyles/>
    </>
  );
}

