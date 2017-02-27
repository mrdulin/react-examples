const fs = require('fs');
const path = require('path');
const webpackConfig = require('./webpack.config');

const commonPaths = [
    './src/common/js/components'
];

function getDirnames(modulePath) {
    const filenames = fs.readdirSync(modulePath, 'utf8');
    const dirnames = filenames.filter(filename => path.join(__dirname, modulePath, filename).indexOf('index.js') === -1);
    return dirnames;
}

function getData(modulePath, dirs = []) {
    let data = '';
    for(let dir of dirs) {
        const filepath = path.join(__dirname, modulePath, dir);
        if(fs.lstatSync(filepath).isFile()) {
            const fileExt = path.extname(dir);
            dir = path.basename(dir, fileExt);
        }
        data += `import ${dir} from './${dir}';\n`; 
    }

    // console.log(data);
    return data;
}

function writeDataToEntry(modulePath, data) {
    const file = path.join(__dirname, modulePath, 'index.js');
    fs.writeFileSync(file, data, 'utf8');
}

function genEntry(modulePaths) {
    for(let modulePath of modulePaths) {
        const dirnames = getDirnames(modulePath);
        const data = getData(modulePath, dirnames);
        writeDataToEntry(modulePath, data);
    }
}

module.exports = genEntry;

// process(commonPaths);



