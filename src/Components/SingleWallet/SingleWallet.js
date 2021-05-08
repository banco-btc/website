import { React, useState } from 'react';
import { Accordion, Button, Card, ListGroup, OverlayTrigger, Popover, Row, Col } from 'react-bootstrap';
import logo from '../../logo.svg';
import { motion } from "framer-motion";
import WifStepByStep from './WifStepByStep';
var crypto = require('crypto');

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

export default function SingleWallet() {
    const [pkh, genPkh] = useState("");
    const handleClick = () => {
        //Gerar 32 Bytes aleatórios
        const pk = crypto.randomBytes(32);
        genPkh(pk.toString('hex').toUpperCase());
        document.getElementById("pkh").innerHTML = pkh;
        document.getElementById("pk_h2").innerHTML = pkh;
        document.getElementById("pk_h3").innerHTML = pkh;
    }
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
    const dica3 = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">O que é criptografia de curvas elípticas ou ECC??</Popover.Title>
            <Popover.Content>
                ECC é um tipo de criptografia de chave pública baseada em funções matemáticas fáceis de calcular em uma direção, mas inviável de reverter para obter os valores iniciais. Outro tipo importante é o RSA, porém ECC tem tamanhos de chaves menores, para o mesmo nível de segurança, então para o Bitcoin é mais vantajoso o ECC.
            </Popover.Content>
            <Popover.Title as="h3">Não percebi nada!!</Popover.Title>
            <Popover.Content>
                Não faz mal! O que importa é que com a Private Key vamos conseguir gerar uma Public Key, que vai ser transformada em um endereço para as pessoas conseguirem enviar Bitcoins.<br/>
                Aqui estão links onde podes aprender mais sobre a parte técnica:<br/>
                <a href="https://en.wikipedia.org/wiki/Elliptic-curve_cryptography">ECC</a><br/>
                <a href="https://en.wikipedia.org/wiki/Public-key_cryptography">Criptografia de chave pública</a><br/>
                <a href="https://en.wikipedia.org/wiki/RSA_(cryptosystem)">RSA</a>
            </Popover.Content>
        </Popover>
    );

    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <WifStepByStep privateKey={pkh} />
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
                            <div id="pkh"></div>
                        </div>
                        <Accordion.Toggle as={Button} variant="dark" eventKey="0">
                            Clique para ver o passo a passo!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="text-dark">
                            <Row>
                                {/*>>>>>>>>>>>>>>>>>>>>MAINNET:<<<<<<<<<<<<<<<<<<<<*/}
                                <Col lg={6} className="border border-dark rounded-lg mt-2">
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
                                    <div>
                                        <h5>Vamos adicionar o prefixo '80' para indicar que se trata da Mainnet:</h5>
                                        <div id="vers_pk_h_mainnet"></div>
                                        <div>
                                            <h5>Passa por um SHA256:</h5>
                                            <OverlayTrigger className="d-inline" trigger="hover" placement="bottom" delay={{ show: 50, hide: 200 }} overlay={dica2}>
                                                <a>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-info-circle" viewBox="0 0 16 16">
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                    </svg>
                                                </a>
                                            </OverlayTrigger>
                                        </div>
                                        <div id="hash_1_mainnet"></div>
                                        <h5>Passa por um SHA256 OUTRA VEZ:</h5>
                                        <div id="hash_2_mainnet"></div>
                                        <h5>Agora temos o checksum (4 primeiros Bytes):</h5>
                                        <div id="priv_checksum_mainnet"></div>
                                        <h5>Juntar '80' + private key + checksum</h5>
                                        <div id="final_pk_h_mainnet"></div>
                                        <h5>Codificado em base 58 temos o Formato WIF:</h5>
                                        <p>( Neste formato podemos colocar numa carteira (Electrum, etc) )</p>
                                        <div id="wif_mainnet"></div>
                                        <h4>Código QR:</h4>
                                        <canvas id="wif_qr_mainnet"></canvas>
                                    </div>
                                    <Row>
                                        <Col>{/*>>>>>>>>>>>>>>>>>>>>P2PKH:<<<<<<<<<<<<<<<<<<<<*/}
                                            <h5>Para obter o endereço bitcoin P2PKH vamos usar a "Private key (em hex)":</h5>
                                            <div id="pk_h2"></div>
                                            <div>
                                                <h5 className="d-inline">Vamos gerar uma chave pública por criptografia de curvas elípticas: (em hex)</h5>
                                                <OverlayTrigger className="d-inline" trigger="hover" placement="bottom" delay={{ show: 50, hide: 200 }} overlay={dica3}>
                                                    <a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-info-circle" viewBox="0 0 16 16">
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                        </svg>
                                                    </a>
                                                </OverlayTrigger>
                                            </div>
                                            <div id="pubk_h_mainnet_P2PKH"></div>
                                            <div><strong>Também existe a versão comprimida, mas não vamos usar:</strong></div>
                                            <div id="pubk_h_comp_mainnet_P2PKH"></div>
                                            <h5>Passamos a chave pública por um SHA256:</h5>
                                            <div id="pubk_h_hash1_mainnet_P2PKH"></div>
                                            <h5>Passamos agora pelo Ripemd160: (guardamos este valor para usar depois)</h5>
                                            <div id="pubk_h_hash2_mainnet_P2PKH"></div>
                                            <div className="border border-dark rounded-lg">
                                                <h5>Agora adicionamos '00' no início pois estamos a criar um endereço P2PKH Mainnet:</h5>
                                                <div id="pubk_h_hash2_with_vers_mainnet_P2PKH"></div>
                                                <h5>Passamos pelo SHA256:</h5>
                                                <div id="pubk_h_hash2_with_vers_hash1_mainnet_P2PKH"></div>
                                                <h5>Passamos pelo SHA256 outra vez:</h5>
                                                <div id="pubk_h_hash2_with_vers_hash2_mainnet_P2PKH"></div>
                                                <h5>Temos aqui os 4 primeiros Bytes (checksum):</h5>
                                                <div id="pub_checksum_mainnet_P2PKH"></div>
                                            </div>
                                            <h5>Juntar '00' + Valor que guardámos + checksum:</h5>
                                            <div id="address_mainnet_P2PKH"></div>
                                            <h5>Codificamos em base 58 e temos o Endereço Bitcoin:</h5>
                                            <div id="final_address_mainnet_P2PKH"></div>
                                        </Col>
                                    </Row>
                                </Col>
                                {/*>>>>>>>>>>>>>>>>>>>>TESTNET:<<<<<<<<<<<<<<<<<<<<*/}
                                <Col lg={6} className="border border-dark rounded-lg mt-2">
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
                                    <div>
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
                                    </div>
                                    <Row>
                                        <Col>{/*>>>>>>>>>>>>>>>>>>>>P2PKH:<<<<<<<<<<<<<<<<<<<<*/}
                                        <h5>Para obter o endereço bitcoin P2PKH vamos usar a "Private key (em hex)":</h5>
                                        <div id="pk_h3"></div>
                                        <div>
                                            <h5 className="d-inline">Vamos gerar uma chave pública por criptografia de curvas elípticas: (em hex)</h5>
                                            <OverlayTrigger className="d-inline" trigger="hover" placement="bottom" delay={{ show: 50, hide: 200 }} overlay={dica3}>
                                                <a>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-info-circle" viewBox="0 0 16 16">
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                    </svg>
                                                </a>
                                            </OverlayTrigger>
                                        </div>
                                        <div id="pubk_h_testnet_P2PKH"></div>
                                        <div><strong>Também existe a versão comprimida, mas não vamos usar:</strong></div>
                                        <div id="pubk_h_comp_testnet_P2PKH"></div>
                                        <h5>Passamos a chave pública por um SHA256:</h5>
                                        <div id="pubk_h_hash1_testnet_P2PKH"></div>
                                        <h5>Passamos agora pelo Ripemd160: (guardamos este valor para usar depois)</h5>
                                        <div id="pubk_h_hash2_testnet_P2PKH"></div>
                                        <div className="border border-dark rounded-lg">
                                            <h5>Agora adicionamos '6F' no início pois estamos a criar um endereço P2PKH Testnet:</h5>
                                            <div id="pubk_h_hash2_with_vers_testnet_P2PKH"></div>
                                            <h5>Passamos pelo SHA256:</h5>
                                            <div id="pubk_h_hash2_with_vers_hash1_testnet_P2PKH"></div>
                                            <h5>Passamos pelo SHA256 outra vez:</h5>
                                            <div id="pubk_h_hash2_with_vers_hash2_testnet_P2PKH"></div>
                                            <h5>Temos aqui os 4 primeiros Bytes (checksum):</h5>
                                            <div id="pub_checksum_testnet_P2PKH"></div>
                                        </div>
                                        <h5>Juntar '6F' + Valor que guardámos + checksum:</h5>
                                        <div id="address_testnet_P2PKH"></div>
                                        <h5>Codificamos em base 58 e temos o Endereço Bitcoin:</h5>
                                        <div id="final_address_testnet_P2PKH"></div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </motion.div>
    );
}



