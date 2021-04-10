import React from 'react';
import './Css/Main.css';
import { Container, Row, Col } from 'react-bootstrap';
import PrivKeyGen from "./Components/PrivKeyGen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import SideInfo from './Components/SideInfo';

export default function Main() {
  return (
    <main className="Main">
      <Router>
        <Container fluid="true" className="p-2 pt-5">
          <Row>
            <Col xs={12} xl={8}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/single_wallet" component={PrivKeyGen} />
              </Switch>
            </Col>
            <Col><SideInfo /></Col>
          </Row>
        </Container>
      </Router>
    </main>
  );
}
