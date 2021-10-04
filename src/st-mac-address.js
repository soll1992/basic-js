import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  let arr = n.split("-")
  let result = []
  for (let i = 0; i < arr.length; i++) {
      let newArr = arr[i].split("")
      for(let j = 0; j < newArr.length; j++) {
          if(newArr[j] >= 0 && newArr[j] <= 9) {
              result.push("true")
          } else if(newArr[j] >= "A" && newArr[j] <= "F") {
              result.push("true")
          } else {
              result.push("false")
          }
      }
  }
  if (result.indexOf("false") != -1) return false
  return true
}