import React from 'react';
import './Main.css';
import { Container, Row, Col } from 'react-bootstrap';
import PrivKeyGen from "./Components/PrivKeyGen";

export default function Main() {
  return (
    <Container fluid="true" className="Main">
      <Row className="p-2">
        <Col xs={12} xl={9}><PrivKeyGen /></Col>
        <Col><PrivKeyGen /></Col>
      </Row>
    </Container>
  );
}
