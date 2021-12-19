//llamada a la api, o la promesa 
//manejo de estados 
//vamos a traer un item list
//ese item list va a mapear item y devolverlos como lista

import { useEffect, useState } from 'react';
import MockedItems from '../../mock/MockedItems'; 
import ItemList from '../ItemList';


const ItemListContainer = () => {
  
    //promesa 
    const [items, setItems] =useState ([]);

    useEffect(() => {
      const itemPromise = new Promise((res, rej) => {
           setTimeout(function() {res(MockedItems)},2000)
      });
      itemPromise.then((res) => setItems(res));
    },[items]);

    return <ItemList items={items} />;
    
};

export default ItemListContainer;