// const fs = require('fs');

process.stdout.write('prompt > ');

require('./pwd');

require('./ls');

require('./cat')


// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim();
//   if (cmd === 'pwd') {
//     require('./pwd');
//   } else {
//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write('\nprompt > ');
//   }
// });
