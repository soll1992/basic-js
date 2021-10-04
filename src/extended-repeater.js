import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let addSum = options.addition

  if (options.separator == undefined) {
    options.separator = "+"
  }
  if (options.additionSeparator == undefined) {
    options.additionSeparator = "|"
  }
  for (let n = 1; n < options.additionRepeatTimes; n++) {
    addSum += options.additionSeparator + options.addition
  }
  if (!(addSum == undefined)) {
  str += addSum
  }

  let result = str
  
  for (let i = 1; i < options.repeatTimes; i++) {
    result += options.separator + str
  }
  return result
}
