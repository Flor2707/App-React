//aca va la card

const Item = ({ item }) => (
    <div>
        <img src={item.img} alt={item.title} />
        <h1>{item.title}</h1>
        <p>{item.precio}</p>
    </div>
);
export default Item;