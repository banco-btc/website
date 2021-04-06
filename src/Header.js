import { Alert } from 'bootstrap';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
let btc_price = require('crypto-price');

export default function Header() {
    return (
      <div className="Header">
        <Navbar bg="light" expand="md">
          <Navbar.Brand href="#home">Banco BTC</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <span id="btc_price"></span>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }


btc_price.getCryptoPrice('EUR', 'BTC').then(obj => {
    document.getElementById("btc_price").innerHTML = Math.round(obj.price * 100) / 100;
}).catch(err => {
    console.log(err);
})
console.log(obj);