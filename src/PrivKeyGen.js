var crypto = require('crypto');
var qr = require('qrcode');

const VERS_MAINNET = '80';
const VERS_TESTNET = 'EF';

export const PrivKeyGen = () => {

    const pk = crypto.randomBytes(32);
    const pk_h = pk.toString('hex').toUpperCase();
    console.log(pk_h)
    document.getElementById("pk_h").innerHTML = pk_h;
    qr.toCanvas(document.getElementById("pk_h_qr"), pk_h, function(error) {
        if (error) {
            console.error(error)
        }
    });

    const hash_1 = crypto.createHash('sha256').update((VERS_MAINNET.toString('utf-8') + pk.toString('utf-8')));
    const hash_1_h = hash_1.digest('hex');
    //var hash_1 = crypto.createHash('sha256').update(Buffer.from(VERS_MAINNET + pk_h)).digest('hex');
}



