const fs = require('fs');
const { comphash } = require('./comphash_func');

const args = process.argv.slice(2);

const hash1 = fs.readFileSync(args[0], 'utf8');
const hash2 = fs.readFileSync(args[1], 'utf8');
console.log(hash1)
console.log(hash2)

console.log('COMPARING HASHES...')
const result = comphash(hash1, hash2);
console.log('result: ', result);

console.log(result === true ? 'COMPARE PASSED' : 'COMPARE FAILED');
