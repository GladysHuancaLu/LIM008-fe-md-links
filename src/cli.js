const mdLinks = require('./main.js');
const [,, ... args] = process.argv;

if (args[1] === '--validate' && args[2] === '--stats') {
    const options = {
        validate: true,
        stats: true
      };
  mdLinks(args[0], options).then(resp => console.log(resp));
} else if (args[1] === '--validate') {
    const options = {
        validate: true,
        stats: false
      };
  mdLinks(args[0], options).then(resp => console.log(resp));
} else if (args[1] === '--stats') {
    const options = {
        validate: false,
        stats: true
      };
  mdLinks(args[0], options).then(resp => console.log(resp));
} else {
  mdLinks(args[0], options).then(resp => console.log(resp));
}