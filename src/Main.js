import React from 'react';
import './Css/Main.css';
import { Container, Row, Col } from 'react-bootstrap';
import SingleWallet from "./Components/SingleWallet";
import Sobrenos from "./Components/Sobrenos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import SideInfo from './Components/SideInfo';
import { AnimatePresence } from "framer-motion";

export default function Main() {
  return (
    <main className="Main">
      <Router>
        <Container fluid="true">
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/single_wallet" component={SingleWallet} />
              <Route path="/sobrenos" component={Sobrenos} />
            </Switch>
          </AnimatePresence>
        </Container>
      </Router>
    </main>
  );
}
