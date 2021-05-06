import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from './logo.svg';
import './Css/Header.css';

export default function Header() {
  return (
    <header className="Header">
      <Navbar bg="light" className="border-bottom" expand="md">
        <Navbar.Brand href="/">
          <img src={logo} className="d-inline-block" alt="Logo"/>
          BitBadger
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/*<span id="btc_price"></span>*/}
            <Nav.Link href="/intro">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-book" viewBox="0 0 16 16">
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
            </svg>
              <div>
                Introdução ao Bitcoin
              </div>
            </Nav.Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
              <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
            </svg>
            <NavDropdown title="Criar Carteira" id="basic-nav-dropdown">
              <NavDropdown.Item href="/single_wallet">Single Wallet</NavDropdown.Item>
              <NavDropdown.Item href="/hd_wallet">HD Wallet</NavDropdown.Item>
              <NavDropdown.Item href="/brain_wallet">Brain Wallet</NavDropdown.Item>
            </NavDropdown>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <NavDropdown title="Rankings" id="basic-nav-dropdown">
              <NavDropdown.Item href="/melhores_carteiras">Melhores Carteiras</NavDropdown.Item>
              <NavDropdown.Item href="/melhores_canais_do_youtube">Melhores Canais de Youtube</NavDropdown.Item>
              <NavDropdown.Item href="/melhores_exchanges">Melhores Exchanges</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Criptografia" id="basic-nav-dropdown">
              <NavDropdown.Item href="/encriptacao">Encriptação</NavDropdown.Item>
              <NavDropdown.Item href="/hashing">Hashing</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
  }

