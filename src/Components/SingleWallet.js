import React from 'react';
import { Accordion, Button, Card, ListGroup, OverlayTrigger, Popover, Row, Col } from 'react-bootstrap';
import logo from '../logo.svg';
import { motion } from "framer-motion";
var crypto = require('crypto');
var qr = require('qrcode');
var bs58 = require('bs58');

export default function SingleWallet() {
    const handleClick = () => {
        //Gerar Bytes
        const pk = crypto.randomBytes(32);
        const pk_h = pk.toString('hex').toUpperCase();
        document.getElementById("pk_h").innerHTML = pk_h;
        //Mainnet
        {
            const VERS_MAINNET = '80';
            const vers_pk_h = VERS_MAINNET + pk_h;
            document.getElementById("vers_pk_h_mainnet").innerHTML = vers_pk_h;
            const hash_1 = crypto.createHash("sha256").update((vers_pk_h), "hex").digest('hex').toUpperCase();
            document.getElementById("hash_1_mainnet").innerHTML = hash_1;
            const hash_2 = crypto.createHash("sha256").update(hash_1, "hex").digest('hex').toUpperCase();
            document.getElementById("hash_2_mainnet").innerHTML = hash_2;
            const checksum = hash_2.substr(0, 8);
            document.getElementById("checksum_mainnet").innerHTML = checksum;
            const final_pk_h = (vers_pk_h + checksum);
            document.getElementById("final_pk_h_mainnet").innerHTML = final_pk_h;
            const wif = bs58.encode(Buffer.from(final_pk_h, 'hex'));
            document.getElementById("wif_mainnet").innerHTML = wif;
            qr.toCanvas(document.getElementById("wif_qr_mainnet"), wif, function (error) {
                if (error) {
                    console.error(error)
                }
            });
        }
        //Testnet
        {
            const VERS_TESTNET = 'EF';
            const vers_pk_h = VERS_TESTNET + pk_h;
            document.getElementById("vers_pk_h_testnet").innerHTML = vers_pk_h;
            const hash_1 = crypto.createHash("sha256").update((vers_pk_h), "hex").digest('hex').toUpperCase();
            document.getElementById("hash_1_testnet").innerHTML = hash_1;
            const hash_2 = crypto.createHash("sha256").update(hash_1, "hex").digest('hex').toUpperCase();
            document.getElementById("hash_2_testnet").innerHTML = hash_2;
            const checksum = hash_2.substr(0, 8);
            document.getElementById("checksum_testnet").innerHTML = checksum;
            const final_pk_h = (vers_pk_h + checksum);
            document.getElementById("final_pk_h_testnet").innerHTML = final_pk_h;
            const wif = bs58.encode(Buffer.from(final_pk_h, 'hex'));
            document.getElementById("wif_testnet").innerHTML = wif;
            qr.toCanvas(document.getElementById("wif_qr_testnet"), wif, function (error) {
                if (error) {
                    console.error(error)
                }
            });
        }
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
    const dica0 = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">O que é uma Single Wallet??</Popover.Title>
            <Popover.Content>
                No Bitcoin, uma Single Wallet é uma carteira que possui uma chave privada, que devemos guardar em segurança, pois sem ela não conseguimos movimentar os bitcoins. Tem também um endereço de recebimento, que podemos dar para alguém, para que essa pessoa consiga nos enviar bitcoins.
          </Popover.Content>
        </Popover>
    );
    const dica1 = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">O que é private key??</Popover.Title>
            <Popover.Content>
                Uma private key é este conjunto grande de letras e números. É o que permite movimentar os seus bitcoins. Perder a private key significa PERDER TODOS OS SEUS BITCOINS guardados nesta carteira!!
          </Popover.Content>
          <Popover.Title as="h3">O que é hex??</Popover.Title>
            <Popover.Content>
                Enquanto que no dia a dia usamos os números em base decimal, na computação é normal usarmos o sistema hexadecimal (ou hex), composto pelos digitos: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F. Ou seja, se quiseres escrever o número 10, em hex é o A!
          </Popover.Content>
        </Popover>
    );
    const dica2 = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Mainnet vs. Testnet</Popover.Title>
            <Popover.Content>
                A <strong>Mainnet</strong> é a <strong>rede principal</strong> do Bitcoin!<br/>
                Na Mainnet as pessoas enviam dinheiro umas às outras, e é onde os "mineradores" gastam o seu tempo confirmando transações.<br/>
                Existe também a <strong>Testnet</strong>, que é uma <strong>rede de testes</strong>, onde existe bitcoin "de brincar", que não vale nada na vida real.<br/>
                Os programadores usam a Testnet para experimentar coisas novas, para depois implementar na rede principal, a Mainnet.
          </Popover.Content>
        </Popover>
    );
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <Accordion>
                <Card>
                    <Card.Header className="text-dark">
                        <div>
                            <h3 className="d-inline">Clica para criar uma Single Wallet</h3>
                            <OverlayTrigger className="d-inline align-text-top" trigger="hover" placement="bottom" delay={{ show: 50, hide: 200 }} overlay={dica0}>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-info-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg>
                                </a>
                            </OverlayTrigger>
                        </div>
                        
                        <Button onClick={handleClick} variant="link">
                            <img src={logo} className="Btc-spinner" alt="logo" />
                        </Button>
                        <div>
                            <h4 className="d-inline">Private key (em hex):</h4>
                            <OverlayTrigger className="d-inline" trigger="hover" placement="bottom" delay={{ show: 50, hide: 200 }} overlay={dica1}>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-info-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg>
                                </a>
                            </OverlayTrigger>
                            <div id="pk_h"></div>
                        </div>
                        <Accordion.Toggle as={Button} variant="dark" eventKey="0">
                            Clique para ver o passo a passo!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="text-dark">
                            
                            <Row className="">
                                <Col className="border border-dark rounded-lg mt-2">
                                    <div>
                                        <h3 className="d-inline">Para a Mainnet:</h3>
                                        <OverlayTrigger className="d-inline" trigger="hover" placement="bottom" delay={{ show: 50, hide: 200 }} overlay={dica2}>
                                            <a>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                </svg>
                                            </a>
                                        </OverlayTrigger>
                                    </div>
                                    <h5>Vamos adicionar o prefixo '80' para indicar que se trata da Mainnet:</h5>
                                    <div id="vers_pk_h_mainnet"></div>
                                    <h5>Passa por um SHA256:</h5>
                                    <div id="hash_1_mainnet"></div>
                                    <h5>Passa por um SHA256 OUTRA VEZ:</h5>
                                    <div id="hash_2_mainnet"></div>
                                    <h5>Agora temos o checksum (4 primeiros Bytes):</h5>
                                    <div id="checksum_mainnet"></div>
                                    <h5>Juntar '80' + private key + checksum</h5>
                                    <div id="final_pk_h_mainnet"></div>
                                    <h5>Codificado em base 58 temos o Formato WIF:</h5>
                                    <p>( Neste formato podemos colocar numa carteira (Electrum, etc) )</p>
                                    <div id="wif_mainnet"></div>
                                    <h4>Código QR:</h4>
                                    <canvas id="wif_qr_mainnet"></canvas>
                                </Col>
                                <Col className="border border-dark rounded-lg mt-2">
                                    <div>
                                        <h3 className="d-inline">Para a Testnet:</h3>
                                        <OverlayTrigger className="d-inline" trigger="hover" placement="bottom" delay={{ show: 50, hide: 200 }} overlay={dica2}>
                                            <a>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                </svg>
                                            </a>
                                        </OverlayTrigger>
                                    </div>
                                    <h5>Vamos adicionar o prefixo 'EF' para indicar que se trata da Testnet:</h5>
                                    <div id="vers_pk_h_testnet"></div>
                                    <h5>Passa por um SHA256:</h5>
                                    <div id="hash_1_testnet"></div>
                                    <h5>Passa por um SHA256 OUTRA VEZ:</h5>
                                    <div id="hash_2_testnet"></div>
                                    <h5>Agora temos o checksum (4 primeiros Bytes):</h5>
                                    <div id="checksum_testnet"></div>
                                    <h5>Juntar 'EF' + private key + checksum</h5>
                                    <div id="final_pk_h_testnet"></div>
                                    <h5>Codificado em base 58 temos o Formato WIF:</h5>
                                    <p>( Neste formato podemos colocar numa carteira (Electrum, etc) )</p>
                                    <div id="wif_testnet"></div>
                                    <h4>Código QR:</h4>
                                    <canvas id="wif_qr_testnet"></canvas>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </motion.div>
    );
}



