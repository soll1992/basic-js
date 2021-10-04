import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let result = {}
  for (let i = 0; i < domains.length; i++) {
    let arr = domains[i].split(".").reverse()
    let teg = ""
    for(let m = 0; m < arr.length; m++) {
      teg += `.${arr[m]}` 
      if (result[teg] == undefined) {
        result[teg] = 1
      } else {
        result[teg] += 1
      }
    }
  }
  return result
}
