import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const App =()=> (
  
    <>
    <BrowserRouter>
    <NavBar titulo='Escena de cocina'/>
     <Switch>
     <Route exact path="/">
    <div className='container' style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around'}}>
    <ItemListContainer/>
    </div>
    </Route>
    <Route exact path="/line/:LineId">
    <div className='container' style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around'}}>
    <ItemListContainer/>
    </div>
    </Route>
    </Switch>
    </BrowserRouter>
    </>

);

export default App;
