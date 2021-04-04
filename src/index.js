"use strict";
//var btc = require('bitcoinjs-lib');
//var openssl = require('openssl');
/*import * as btc from "bitcoinjs-lib";*/

const btc = require('bitcoinjs-lib');


//document.getElementById("wif").innerHTML = wif.toUpperCase();


//console.log(privKey.privateKey);
//var wif = privKey.toWIF();
//console.log(wif);
//document.getElementById("wif").innerHTML = wif;


window.privKeyGen = function(){
    var privKey = btc.ECPair.makeRandom({ compressed: false });   //makeRandom(btc.networks.bitcoin);
    console.log(privKey);
    var privKeyHex = privKey.privateKey.toString('hex').toUpperCase();
    var wif = privKey.toWIF();
    document.getElementById("privKeyHex").innerHTML = privKeyHex;
    document.getElementById("wif").innerHTML = wif;
};