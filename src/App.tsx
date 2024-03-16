import React from 'react';
import logo from './logo.svg';
import AppHeader from './components/app-header/AppHeader';
import BurgerIngredients from './components/burger-ingredients/BurgerIngredients';
import BurgerConstructor from './components/burger-constructor/BurgerConstructor';
import './App.css';
import { data } from '../src/utils/data'

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      {/* <BurgerIngredients {...data}></BurgerIngredients> */}
      <BurgerConstructor {...data}></BurgerConstructor>
    </div>
  );
}

export default App;
