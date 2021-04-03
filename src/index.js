//var btc = require('bitcoinjs-lib');
//var openssl = require('openssl');
/*import * as btc from "bitcoinjs-lib";*/

const btc = require('bitcoinjs-lib');


//document.getElementById("wif").innerHTML = wif.toUpperCase();

var privKey = btc.ECPair.makeRandom();
console.log(privKey);
var wif = privKey.toWIF();
console.log(wif);
document.getElementById("wif").innerHTML = wif;


//function criar(){
    //document.getElementById("privKey").innerHTML = privKey;
  //  document.getElementById("wif").innerHTML = wif;
//}