import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  encrypt(message,key) {

    if (!message || !key) throw Error('Incorrect arguments!')
  
    message = message.toUpperCase().split("")
    key = key.toUpperCase().split("")
  
    let messageNum = []
    let keyNum = []
    let code = []
    
    for (let i = 0, j = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) === -1) {
        messageNum.push(message[i])
        keyNum.push(message[i])
        code.push(message[i])
      } else {
          messageNum.push(this.alphabet.indexOf(message[i]))
          keyNum.push(this.alphabet.indexOf(key[j]))
          j++
          if (j == key.length) {
            j = 0
          }
          code.push(this.alphabet[(keyNum[i] + messageNum[i]) % this.alphabet.length])
      }
    }
    return this.direct ? code.join("") : code.reverse().join("")
  }
  
  decrypt(encryptedMessage,key) {
  
    if (!encryptedMessage || !key) throw Error('Incorrect arguments!')
  
    encryptedMessage = encryptedMessage.split("")
    key = key.toUpperCase().split("")
  
    let encryptedMessageNum = []
    let keyNum = []
    let code = []
    
    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (this.alphabet.indexOf(encryptedMessage[i]) === -1) {
        encryptedMessageNum.push(encryptedMessage[i])
        keyNum.push(encryptedMessage[i])
        code.push(encryptedMessage[i])
      } else {
          encryptedMessageNum.push(this.alphabet.indexOf(encryptedMessage[i]))
          keyNum.push(this.alphabet.indexOf(key[j]))
          j++
          if (j == key.length) {
            j = 0
          }
          code.push(this.alphabet[(encryptedMessageNum[i] + 26 - keyNum[i]) % this.alphabet.length])
      }
    }
    return this.direct ? code.join("") : code.reverse().join("")
  }
}
