const fs = require('fs');
const path = require('path');

function alias(p, excludeDirsOrFiles) {
  const alias = {};

  const dirs = fs.readdirSync(p);
  const dirsFinal = diff(dirs, excludeDirsOrFiles);

  const dirPaths = dirsFinal.map(dir => path.resolve(p, dir));

  dirPaths.forEach((dir, idx) => {
    if (fs.lstatSync(dir).isDirectory()) {
      const key = dirsFinal[idx];
      alias[key] = dir;
    }
  });

  return alias;
}

function diff(a1, a2) {
  return a1.filter(val => {
    return a2.indexOf(val) === -1;
  })
}

// console.log(alias(path.resolve(__dirname, '..', 'src'), ['typings']));

module.exports = alias;
