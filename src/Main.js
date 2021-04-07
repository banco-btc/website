import React from 'react';
import './Main.css';
import { Container, Row, Col } from 'react-bootstrap';
import PrivKeyGen from "./Components/PrivKeyGen";

export default function Main() {
  return (
    <Container fluid="md" className="Main">
      <Row>
        <Col><PrivKeyGen /></Col>
        <Col></Col>
      </Row>
      
    </Container>
  );
}
