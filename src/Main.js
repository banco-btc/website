import React from 'react';
import './Css/Main.css';
import { Container, Row, Col } from 'react-bootstrap';
import PrivKeyGen from "./Components/PrivKeyGen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import SideInfo from './Components/SideInfo';
import { AnimatePresence } from "framer-motion";

export default function Main() {
  return (
    <main className="Main">
      <Router>
        <Container fluid="true" className="">
          <Row>
            <Col xs={12} xl={8}>
              <AnimatePresence exitBeforeEnter>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/single_wallet" component={PrivKeyGen} />
                </Switch>
              </AnimatePresence>
            </Col>
            {/*<Col><SideInfo /></Col>*/}
          </Row>
        </Container>
      </Router>
    </main>
  );
}
