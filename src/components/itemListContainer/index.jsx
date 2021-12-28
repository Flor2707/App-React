//llamada a la api, o la promesa 
//manejo de estados 
//vamos a traer un item list
//ese item list va a mapear item y devolverlos como lista

import { useEffect, useState } from 'react';
import MockedItems from '../../mock/MockedItems'; 
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  
    //promesa 
    const [items, setItems] =useState ([]);
    const {LineId} =useParams();

    useEffect(() => {
      const getItems = new Promise((resolve) => {
           setTimeout (() => {
             const myMockedItems=LineId 
             ? MockedItems.filter ((item) => item.line === LineId)
             :MockedItems;

             resolve(myMockedItems);
           }, 1000);
          });

      getItems.then((res) => {
        setItems(res);
      });
    }, []);


    return <ItemList items={items} />;
    
};

export default ItemListContainer;