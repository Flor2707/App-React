import React from 'react';


const ItemDetail = ({
    id,
    title,
    line,
    img,
    description,
    precio,

}) => {
    return (
        <div className="detail-row">
        <img src={img} alt={`${id}-${title}`}
        className="flex-col"/>
        <section className="flex-col">
            <h1>{title}</h1>
            <p>{description}</p>
            <h2>${precio}</h2>
        </section>
        </div>
    );
};
export default ItemDetail;