import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
    if(Array.isArray(members)) {
    let dreamTeam = members.map( item => {
      if(typeof(item) == "string") {
          return item.trim().slice(0,1).toUpperCase()
      } 
    })
    let sortedDreamTeam = dreamTeam.filter( item => typeof(item) == "string").sort()
    if (sortedDreamTeam.length === 0) return false
    return sortedDreamTeam.reduce(function(a, b) {
        return a + b;
    });
  } else return false
}
