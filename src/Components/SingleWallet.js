import React from 'react';
import { Accordion, Button, Card, OverlayTrigger, Popover } from 'react-bootstrap';
import logo from '../logo.svg';
import { motion } from "framer-motion";
var crypto = require('crypto');
var qr = require('qrcode');
var bs58 = require('bs58');

export default function SingleWallet() {
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
        qr.toCanvas(document.getElementById("wif_qr"), wif, function (error) {
            if (error) {
                console.error(error)
            }
        });
    }
    const pageVariants = {
        initial: {
            opacity: 0,
            y: "-100vh",
            scale: 0.5
        },
        in: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        out: {
            opacity: 0,
            y: "100vh",
            scale: 1.2
        }
    };
    const pageTransition = {
        duration: 1,
        type: "tween",
        ease: "anticipate"
    };
    const dica1 = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">O que é hex?</Popover.Title>
            <Popover.Content>
                Enquanto que no dia a dia usamos os números em base decimal, na computação é normal usarmos o sistema hexadecimal (ou hex), composto pelos digitos: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F. Ou seja, se quiseres escrever o número 10, em hex é o A!
          </Popover.Content>
        </Popover>
    );
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <h2>Clica aqui para criar uma chave privada bitcoin, e o respectivo endereço</h2>
            <Button onClick={handleClick} variant="link">
                <img src={logo} className="Btc-spinner" alt="logo" />
            </Button>{' '}
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} eventKey="0">
                            Passo a passo para gerar esta chave privada
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="text-dark">
                            <h4 className="d-inline">Private key (hex):</h4>
                            <OverlayTrigger className="d-inline align-text-top" trigger="hover" placement="bottom" delay={{ show: 50, hide: 200 }} overlay={dica1}>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg>
                                </a>
                            </OverlayTrigger>

                            <div id="pk_h"></div>
                            <h5>Vamos adicionar o prefixo '80' para indicar que se trata da Mainnet:</h5>
                            <div id="vers_pk_h"></div>
                            <h5>Passa por um SHA256:</h5>
                            <div id="hash_1"></div>
                            <h5>Passa por um SHA256 OUTRA VEZ:</h5>
                            <div id="hash_2"></div>
                            <h5>Agora temos o checksum (4 primeiros Bytes):</h5>
                            <div id="checksum"></div>
                            <h5>Juntar '80' + private key + checksum</h5>
                            <div id="final_pk_h"></div>
                            <h5>Codificado em base 58 temos o Formato WIF:</h5>
                            <p>( Neste formato podemos colocar numa carteira (Electrum, etc) )</p>
                            <div id="wif"></div>
                            <h4>Código QR:</h4>
                            <canvas id="wif_qr"></canvas>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </motion.div>
    );
}



