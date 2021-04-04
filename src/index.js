"use strict";
import * as btc from "bitcoinjs-lib";
import * as qr from "qrcode";

window.privKeyGen = function(){

    var privKeyStruct = btc.ECPair.makeRandom({ compressed: false, network: btc.networks.bitcoin });
    console.log(privKeyStruct);  //DEBUG

    var privKey = privKeyStruct.privateKey;
    var privKeyHex = privKey.toString('hex').toUpperCase();
    document.getElementById("privKeyHex").innerHTML = privKeyHex;
    qr.toCanvas(document.getElementById('privKeyHexQR'), privKeyHex, function(error){
        if(error) {console.error(error)}
        console.log('Success!');
    })
    
    var wif = privKeyStruct.toWIF();
    document.getElementById("wif").innerHTML = wif;
    qr.toCanvas(document.getElementById('wifQR'), wif, function(error){
        if(error) {console.error(error)}
        console.log('Success!');
    })

};