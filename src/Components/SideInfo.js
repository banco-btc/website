import { React } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import BtcBlock from './BtcBlock';
import BtcPrice from './BtcPrice';

export default function SideInfo() {
    return(
        <ListGroup>
            <ListGroupItem variant="dark"><BtcPrice /></ListGroupItem>
            <ListGroupItem variant="dark"><BtcBlock /></ListGroupItem>
        </ListGroup>
    )
}