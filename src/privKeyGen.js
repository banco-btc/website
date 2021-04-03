var Crypto = require('cryptojs').Crypto;

export function privKeyGen() {
    var privKey = Crypto.util.randomBytes(32);
    document.getElementById("privKey").innerHTML = privKey;
}