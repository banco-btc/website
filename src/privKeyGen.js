var btc = require('bitcoinjs-lib');
var openssl = require('openssl');
var crypto = require('crypto');

function privKeyGen() {
    var privKey = crypto.randomBytes(32);
    document.getElementById("privKey").innerHTML = privKey;
    
}