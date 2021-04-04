"use strict";
import * as btc from "bitcoinjs-lib";
import * as qr from "qrcode";
const crypto = require('crypto');

window.privKeyGen = function(){

    var privKeyHex = crypto.randomBytes(32).toString('hex').toUpperCase();
    document.getElementById("privKeyHex").innerHTML = privKeyHex;
    qr.toCanvas(document.getElementById('privKeyHexQR'), privKeyHex, function(error){
        if(error) {console.error(error)}
    })
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