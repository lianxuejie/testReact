// var CryptoJS = require('crypto-js')
import * as CryptoJS from 'crypto-js'

function encode(char: string) {
  return CryptoJS.AES.encrypt(char, code.EncryptionKey).toString();
}

function decode(char: string) {
  const bytes = CryptoJS.AES.decrypt(char, code.EncryptionKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}

const code = {
  EncryptionKey:
    "",
  encode,
  decode,
};

export default code;
