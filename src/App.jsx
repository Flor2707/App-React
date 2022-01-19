import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';


const App =()=> (
  
    <CartProvider>
    <BrowserRouter>
    <NavBar titulo='Escena de cocina'/>
     <Switch>
     <Route exact path="/">
    <div className='container' style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around'}}>
    <ItemListContainer/>
    </div>
    </Route>
    <Route exact path="/line/:lineId">
    <div className='container' style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around'}}>
    <ItemListContainer/>
    </div>
    </Route>
    <Route exact path="/product/:itemId">
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around'}}>
    <ItemDetailContainer/>
    </div>
    </Route>
    </Switch>
    </BrowserRouter>
    </CartProvider>

);

export default App;
