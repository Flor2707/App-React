//aca va la card
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";



const Item = ({ item }) => (
  <div >
    <Card style={{ width: '18rem', paddingTop: '1em'}}>
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

