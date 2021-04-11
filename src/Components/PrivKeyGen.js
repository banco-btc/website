import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import logo from '../logo.svg';
import { motion } from "framer-motion";
var crypto = require('crypto');
var qr = require('qrcode');
var bs58 = require('bs58');



export default function PrivKeyGen() {
    const handleClick = () => {
        const VERS_MAINNET = '80';
        const VERS_TESTNET = 'EF';
        const pk = crypto.randomBytes(32);
        const pk_h = pk.toString('hex').toUpperCase();
        document.getElementById("pk_h").innerHTML = pk_h;
        const vers_pk_h = VERS_MAINNET + pk_h;
        document.getElementById("vers_pk_h").innerHTML = vers_pk_h;
        const hash_1 = crypto.createHash("sha256").update((vers_pk_h), "hex").digest('hex').toUpperCase();
        document.getElementById("hash_1").innerHTML = hash_1;
        const hash_2 = crypto.createHash("sha256").update(hash_1, "hex").digest('hex').toUpperCase();
        document.getElementById("hash_2").innerHTML = hash_2;
        const checksum = hash_2.substr(0, 8);
        document.getElementById("checksum").innerHTML = checksum;
        const final_pk_h = (vers_pk_h + checksum);
        document.getElementById("final_pk_h").innerHTML = final_pk_h;
        const wif = bs58.encode(Buffer.from(final_pk_h, 'hex'));
        document.getElementById("wif").innerHTML = wif;
        qr.toCanvas(document.getElementById("wif_qr"), wif, function(error) {
            if (error) {
                console.error(error)
            }
        });
    }
    const pageTransition = {
        in: {
            opacity: 1,
            y: 0
        },
        out: {
            opacity: 0,
            y: "-100vh"
        }
    };
    return(
        <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
            <h2>Clica aqui para criar uma Private Key</h2>
            <Button onClick={handleClick} variant="link">
            <img src={logo} className="Btc-spinner" alt="logo" />
            </Button>{' '}
            <ListGroup variant="flush" className="text-break">
            <ListGroupItem variant="dark">
                <h4>Private key (hex):</h4>
                <div id="pk_h"></div>
            </ListGroupItem>
            <ListGroupItem variant="dark">
                <h5>Vamos adicionar o prefixo '80' para indicar que se trata da Mainnet:</h5>
                <div id="vers_pk_h"></div>
            </ListGroupItem>
            <ListGroupItem variant="dark">
                <h5>Passa por um SHA256:</h5>
                <div id="hash_1"></div>
            </ListGroupItem>
            <ListGroupItem variant="dark">
                <h5>Passa por um SHA256 OUTRA VEZ:</h5>
                <div id="hash_2"></div>
            </ListGroupItem>
            <ListGroupItem variant="dark">
                <h5>Agora temos o checksum (4 primeiros Bytes)</h5>
                <div id="checksum"></div>
            </ListGroupItem>
            <ListGroupItem variant="dark">
                <h5>Juntar '80' + private key + checksum</h5>
                <div id="final_pk_h"></div>
            </ListGroupItem>
            <ListGroupItem variant="dark">
                <h5>Agora codificado em base 58: Formato WIF</h5>
                <div id="wif"></div>
            </ListGroupItem>
            <ListGroupItem variant="dark">
                <h4>Código QR:</h4>
                <canvas id="wif_qr"></canvas>
            </ListGroupItem>
            </ListGroup>
        </motion.div>
    );
}



