import React from 'react';
import logo from './logo.svg';
import './Main.css';
import { Button, Container } from 'react-bootstrap';
import { PrivKeyGen } from "./PrivKeyGen";

export default function Main() {
  return (
    <Container fluid="md" className="Main">
      <h2>Clica aqui para criar uma Private Key</h2>
      <Button onClick={PrivKeyGen} className="Btc-btn" variant="link">
        <img src={logo} className="Btc-spinner" alt="logo" />
      </Button>{' '}
      <div className="text-break">
        <div className="border">
          <h4>Private key (hex):</h4>
          <div id="pk_h"></div>
        </div>
        <div className="border">
          <h5>Vamos adicionar o prefixo '80' para indicar que se trata da Mainnet:</h5>
          <div id="vers_pk_h"></div>
        </div>
        <div className="border">
          <h5>Passa por um SHA256:</h5>
          <div id="hash_1"></div>
        </div>
        <div className="border">
          <h5>Passa por um SHA256 OUTRA VEZ:</h5>
          <div id="hash_2"></div>
        </div>
        <div className="border">
          <h5>Agora temos o checksum (4 primeiros Bytes)</h5>
          <div id="checksum"></div>
        </div>
        <div className="border">
          <h5>Juntar '80' + private key + checksum</h5>
          <div id="final_pk_h"></div>
        </div>
        <div className="border">
          <h5>Agora codificado em base 58: Formato WIF</h5>
          <div id="wif"></div>
        </div>
        <div className="border">
          <h4>Código QR:</h4>
          <canvas id="wif_qr"></canvas>
        </div>
      </div>
    </Container>
  );
}
