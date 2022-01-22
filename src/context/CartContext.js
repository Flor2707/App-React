import React, {createContext, useState} from 'react';


export const CartContext = createContext ([]);

export const CartProvider = ({ children }) => {
 const [carrito, setCarrito] = useState([ ]);
 const addProducto = (item, cantidad) => {
   const findItem = carrito.find(el => el.id===item.id)
   if (findItem) {
     findItem.cantidad += cantidad
     setCarrito([...carrito])
     console.log(carrito);
   }
   else {
     setCarrito([...carrito, {...item,cantidad}])
   }
  }

    const removeProducto = (id) => {
        const auxArr = carrito.filter( (producto) => producto.id !==id);
        setCarrito(auxArr);
    }

    return (<CartContext.Provider value={{ carrito, removeProducto, addProducto}}>{children}</CartContext.Provider>);
};

 