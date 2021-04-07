import React from 'react';
import './Main.css';
import { Container } from 'react-bootstrap';
import PrivKeyGen from "./Components/PrivKeyGen";

export default function Main() {
  return (
    <Container fluid="md" className="Main">
      <PrivKeyGen />
    </Container>
  );
}
