"use strict";
import * as btc from "bitcoinjs-lib";
import * as qr from "qrcode";
const crypto = require('crypto');

window.privKeyGen = function(){
    //Gerar private key
    var privKeyArr = crypto.randomBytes(32);
    var privKeyHex = privKeyArr.toString('hex');
    document.getElementById("privKeyHex").innerHTML = privKeyHex.toUpperCase();
    qr.toCanvas(document.getElementById('privKeyHexQR'), privKeyHex, function(error){
        if(error) {console.error(error)}
    })
    //Gerar WIF Mainnet
    var vers_mainnet = '80';
    var privKeyWithVerHex = ver_mainnet + privKeyHex;
    var privKeyWithVerBytes = privKeyWithVerHex.
    var firstSHA256 = crypto.createHash('sha256').update(Buffer.from(privKeyArr)).digest('hex');
    document.getElementById("firstSHA256-mainnet").innerHTML = "AQUI:" + firstSHA256;
    console.log(privKeyHex);
    console.log(firstSHA256);

    //Gerar WIF Testnet
    var vers_testnet = 'EF';







    //var privKeyStruct = btc.ECPair.makeRandom({ compressed: false, network: btc.networks.bitcoin });
    //console.log(privKeyStruct);  //DEBUG
    //var privKey = privKeyStruct.privateKey;
    //var privKeyHex = privKey.toString('hex').toUpperCase();
    
    //var wif = privKeyStruct.toWIF();
    //document.getElementById("wif").innerHTML = wif;
    //qr.toCanvas(document.getElementById('wifQR'), wif, function(error){
    //    if(error) {console.error(error)}
    //    console.log('Success!');
    //})

};