import { React } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import BtcBlock from './BtcBlock';
import Greetings from './Greetings';
import BtcPrice from './BtcPrice';


export default function SideInfo() {
    return(
        <ListGroup>
            <ListGroupItem variant="dark">
                <Greetings />
                <p>Algumas informações importantes:</p>
            </ListGroupItem>
            <ListGroupItem variant="dark">
                <p>Preço atual:</p>
                <BtcPrice />
            </ListGroupItem>
            <ListGroupItem variant="dark">
                <p>Bloco atual:</p>
                <BtcBlock />
            </ListGroupItem>
        </ListGroup>
    )
}