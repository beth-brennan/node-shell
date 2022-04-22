const fs = require('fs');

module.exports = process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ')[0];
  if (cmd === 'cat') {
    const fileName = data.toString().split(' ')[1];
    fs.readFile(`${process.cwd()}/${fileName}\n/`, 'utf8', (err, dataTwo) => {
      if (err) {
          throw err
      }
      else {
          process.stdout.write(dataTwo)
          process.stdout.write("\nprompt > ");
      }
    });
  } else {
      process.stdout.write('You typed: ' + cmd);
      process.stdout.write('\nprompt > ');
  }
});
