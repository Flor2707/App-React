//aca va la card

import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";




const Item = ({ item }) => (

  <div className={`item_card ${item.line}-line`}>
    <Card style={{ width: '18rem', paddingTop: '1em',backgroundColor:'none'}}>
    <Card.Title>{item.line}</Card.Title>
  <Card.Img variant="top" src={item.img} alt={item.title} />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>
     {item.precio}
    </Card.Text>
    <Button variant="primary">Comprar</Button>
  </Card.Body>
</Card>
</div>

);
export default Item;

