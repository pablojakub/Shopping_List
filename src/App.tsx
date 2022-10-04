import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { ShoppingList } from './components/ShoppingList/ShoppingList';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <>
    <Header/>
    <ShoppingList/>
    <GlobalStyles/>
    </>
  );
}

export default App;
