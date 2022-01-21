import { useState } from "react";

 const ItemCantidad = ({stock, onAdd}) => {
    const [contador, setContador] = useState (0);

    const addContador = () => {
        if (contador<stock) {
            setContador (contador+1)
        }
    } 
    const restContador =() => {
        if (contador> 0) {
            setContador (contador-1)
        }
    }
    
    
    return <>
        <button onClick={restContador}> - </button>
        <p> { contador } </p>
        <button onClick={addContador}> + </button>
        <button onClick={ () => onAdd(contador) } > Agregar </button>
    </>

}
export default ItemCantidad;