
function criarprivkey() {
//Criar private key
var privKey = Crypto.util.randomBytes(32)
console.log("Private key generated with 32 random bytes:")
console.log(privKey)

//Passar para hex
var privKeyHex = Crypto.util.bytesToHex(privKey)
console.log("Same private key, but in hex:")
console.log(privKeyHex.toUpperCase())

document.getElementById("privkey").innerHTML = privKeyHex;


//STEP 2

//Juntar versão + private key
var vers = 'EF'
var privKey = privKeyHex
var versWithPrivKey = vers + privKey

//Fazer os hashes para encontrar o checksum
var firstSHA = Crypto.SHA256(Crypto.util.hexToBytes(versWithPrivKey))
console.log("Private key hashed with SHA256:")
console.log(firstSHA)
var secondSHA = Crypto.SHA256(Crypto.util.hexToBytes(firstSHA))
console.log("Private key hashed AGAIN with SHA256:")
console.log(secondSHA)

//Encontrar o checksum
var checksum = secondSHA.substr(0, 8)
console.log("First 4 bytes of the previous string (Checksum):")
console.log(checksum)

//Juntar versão + private key + checksum
var wifPrivKey = versWithPrivKey + checksum
console.log("This is the WIF of our private key:")
console.log(wifPrivKey)

//Codificar para base 58
var wifPrivKeyEncoded58 = bs58.encode(Crypto.util.hexToBytes(wifPrivKey))
console.log("This is the same WIF but encoded in base 58")
console.log(wifPrivKeyEncoded58)


}
