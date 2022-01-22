import React, { useState } from 'react';
import ItemCantidad from '../itemCantidad';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({
    id,
    title,
    line,
    img,
    description,
    precio,
    stock,

}) => {
    const [ added, setAdded] = useState(false)
    const onAdd = ( value ) => {
        if ( value > 0 ) {
           setAdded(true)
           CartContext()
    // y aca llamariamos a la funcion del context para agregar un item tambien!!
        }
    }
   
    return (
        <div className="detail-row">
        <img src={img} alt={`${id}-${title}`}
        className="flex-col"/>
        <section className="flex-col">
            <h1>{title}</h1>
            <p>{description}</p>
            <h2>${precio}</h2>
            <ItemCantidad stock={ stock} onAdd={ onAdd } />
        </section>
        </div>
    );
};
export default ItemDetail;