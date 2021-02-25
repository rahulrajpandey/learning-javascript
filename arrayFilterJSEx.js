/* First Example: filter all words with length > 6 */
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
console.log(result); // ['exuberant', 'destruction', 'present']

/* Second Example: filter all the values in the ages array that are 18 or over */
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

var ageList = ages.filter(checkAdult);
console.log(ageList); // [32, 33, 40]


