var Crypto = exports.Crypto = require('.\cryptojs\lib\Crypto.js').Crypto;

function privKeyGen() {
    var privKey = Crypto.util.randomBytes(32);
    var privKeyHex = Crypto.util.bytesToHex(privKey);
    document.getElementById("privKey").innerHTML = privKey;
    document.getElementById("privKeyHex").innerHTML = privKeyHex;
}
