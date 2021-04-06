import React from 'react';
import logo from './logo.svg';
import './Main.css';
import { Button } from 'react-bootstrap';
import { PrivKeyGen } from "./PrivKeyGen";

export default function Main() {
  return (
    <div className="Main">
      <div>
        <h2>Clica aqui para criar uma Private Key</h2>
        <Button onClick={PrivKeyGen} id="btn_pkg" variant="link">
          <img src={logo} className="Btc-spinner" alt="logo" />
        </Button>{' '}
        <div id="pk_h"></div>
        <canvas id="pk_h_qr"></canvas>
      </div>
    </div>
  );
}
