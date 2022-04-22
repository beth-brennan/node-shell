

module.exports = process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
      const wd = process.cwd();
      process.stdout.write(wd);
    } else {
      process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ');
  });



// module.exports = function() {
//   const wd = process.cwd();
//   process.stdout.write(wd);
//   process.stdout.write('\nprompt > ');
// }

