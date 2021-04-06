var crypto = require('crypto');
var qr = require('qrcode');
var bs58 = require('bs58');

const VERS_MAINNET = '80';
const VERS_TESTNET = 'EF';

export const PrivKeyGen = () => {
    
    const pk = crypto.randomBytes(32);
    const pk_h = pk.toString('hex').toUpperCase();
    document.getElementById("pk_h").innerHTML = pk_h;
    

    const vers_pk_h = VERS_MAINNET + pk_h;
    document.getElementById("vers_pk_h").innerHTML = vers_pk_h;

    const hash_1 = crypto.createHash("sha256").update((vers_pk_h), "hex").digest('hex').toUpperCase();
    document.getElementById("hash_1").innerHTML = hash_1;
    const hash_2 = crypto.createHash("sha256").update(hash_1, "hex").digest('hex').toUpperCase();
    document.getElementById("hash_2").innerHTML = hash_2;

    const checksum = hash_2.substr(0, 8);
    document.getElementById("checksum").innerHTML = checksum;

    const final_pk_h = (vers_pk_h + checksum);
    document.getElementById("final_pk_h").innerHTML = final_pk_h;
    const wif = bs58.encode(Buffer.from(final_pk_h, 'hex'));
    document.getElementById("wif").innerHTML = wif;

    qr.toCanvas(document.getElementById("wif_qr"), wif, function(error) {
        if (error) {
            console.error(error)
        }
    });
}



