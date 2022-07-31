const fs = require('fs');

const firstFile = fs.readFileSync('./content/first.txt', 'utf-8');
const secondFile = fs.readFileSync('./content/second.txt', 'utf-8');

fs.writeFileSync('./content/result-sync.txt', `Here is the result:  ${firstFile}, ${secondFile}`, {flag: 'a'});