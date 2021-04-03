import * as btc from "bitcoinjs-lib";

function privKeyGen() {
    var privKey = btc.ECPair.makeRandom();
    document.getElementById("privKey").innerHTML = privKey;
    
}