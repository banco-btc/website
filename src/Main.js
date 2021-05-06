import React from 'react';
import './Css/Main.css';
import { Container, Row, Col } from 'react-bootstrap';
import Intro from "./Components/Intro";
import SingleWallet from "./Components/SingleWallet/SingleWallet";
import BrainWallet from "./Components/BrainWallet/BrainWallet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import { AnimatePresence } from "framer-motion";

export default function Main() {
  return (
    <main className="Main">
      <Router>
        <Container fluid="true">
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/intro" component={Intro} />
              <Route path="/single_wallet" component={SingleWallet} />
              <Route path="/brain_wallet" component={BrainWallet} />
            </Switch>
          </AnimatePresence>
        </Container>
      </Router>
    </main>
  );
}
