//llamada a la api, o la promesa 
//manejo de estados 
//vamos a traer un item list
//ese item list va a mapear item y devolverlos como lista
import React, {useContext} from 'react';
import { useEffect, useState } from 'react';

import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import MockedItems from '../../mock/MockedItems';



const ItemListContainer = () => {
   const { removeProducto } = useContext (CartContext);
    //promesa 
    const [items, setItems] =useState ([]);
    const [loading, setLoading] = useState (true);
    const {lineId} =useParams();
  

  
    useEffect(() => {
      setLoading(true);
      const getItems = new Promise((resolve) => {
           setTimeout (() => {
             const myMockedItems=lineId
             ? MockedItems.filter ((item) => item.line === lineId)
             :MockedItems;
             resolve(myMockedItems);
           }, 1000);
          });
      getItems.then((res) => {
        setItems(res);
      })
      .finally(() => setLoading(false));
    }, [lineId]);



    return (
    loading ? <h2>CARGANDO...</h2>:
    <>
    <ItemList items={items} removeProducto={removeProducto} />;
    
    </>);
    
};

export default ItemListContainer;