import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail';
import MockedItems from '../../mock/MockedItems'; 
import { useParams } from 'react-router-dom';


 const ItemDetailContainer = () => {
    const [product, setProduct]= useState ({});
    const [loading, setLoading] = useState(true);
    const {itemId} =useParams();
  

  
    useEffect(() => {
      setLoading(true);
      const getItems = new Promise((resolve) => {
           setTimeout (() => {
             const myMockedItems= MockedItems.find ((item) => item.id === itemId);
             
             resolve(myMockedItems);
           }, 1000);
          });
      getItems
      .then((res) => {
        setProduct(res);
      })
      .finally(() => setLoading(false));
    }, [itemId]);

    return loading ? <h2>CARGANDO...</h2>:
    <ItemDetail {...product} />;
};
export default ItemDetailContainer;