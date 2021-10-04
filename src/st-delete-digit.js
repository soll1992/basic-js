import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  n = String(n).split("")
  if (n[0] > n[1]) {
    n.splice(1,1)
  } else if(n[0] < n[1]) {
    n.splice(0,1)
  } else {
    for(let i = 0; i < n.length; i++) {
      if (n[i] > n[i + 1]) {
        n.splice(i + 1,1)
        break
      } else if (n[i] < n[i + 1]) {
        n.splice(i,1)
        break
    }
  }
  }
  return +(n.join(""))
}
