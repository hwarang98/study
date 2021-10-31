const fs = require('fs')

console.log('a');
const result = fs.readFileSync('../syntax/sample.txt', 'utf8')
console.log(result);
console.log('c');