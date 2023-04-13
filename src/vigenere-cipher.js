const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(typeMachine = true) {
    this.isDirectMachine = typeMachine;
    this.codeFirstSymbol = "A".codePointAt(0);
    this.codeLastSymbol = "Z".codePointAt(0);
    this.mod = this.codeLastSymbol - this.codeFirstSymbol + 1;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const messageUpperCase = message.toUpperCase();
    const keyWord = key.toUpperCase();
    const keyString = keyWord.padEnd(messageUpperCase.length, keyWord);

    let index = 0;
    const encryptedMessage = [];

    for (let symbol of messageUpperCase) {
      const codeSymbol = symbol.codePointAt(0);

      if (this.isLatinAlpabetSymbol(symbol)) {
        encryptedMessage.push(String.fromCodePoint(((codeSymbol + keyString.codePointAt(index)) % this.mod) + this.codeFirstSymbol));
        index += 1;
      } else {
        encryptedMessage.push(symbol);
      }
    }

    return this.isDirectMachine ? encryptedMessage.join("") : encryptedMessage.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    const encryptedMessageUpperCase = encryptedMessage.toUpperCase();
    const keyWord = key.toUpperCase();
    const keyString = keyWord.padEnd(encryptedMessageUpperCase.length, keyWord);

    let index = 0
    const decryptedMessage = [];

    for (let symbol of encryptedMessageUpperCase) {
      const codeSymbol = symbol.codePointAt(0);

      if (this.isLatinAlpabetSymbol(symbol)) {
        decryptedMessage.push(String.fromCodePoint(((codeSymbol + this.mod - keyString.codePointAt(index)) % this.mod) + this.codeFirstSymbol));
        index += 1;
      } else {
        decryptedMessage.push(symbol);
      }
    }

    return this.isDirectMachine ? decryptedMessage.join("") : decryptedMessage.reverse().join("");
  }

  isLatinAlpabetSymbol(symbol) {
    const codeSymbol = symbol.codePointAt(0);
    return (codeSymbol >= this.codeFirstSymbol) && (codeSymbol <= this.codeLastSymbol);
  }
}

module.exports = {
  VigenereCipheringMachine
};
