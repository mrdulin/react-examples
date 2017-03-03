"use strict";

const fs = require('fs');
const path = require('path');

const modulePaths = [
    './app/common/js/components',
    './app/common/js/basecomponent'
];

function getDirnames(modulePath) {
    const filenames = fs.readdirSync(modulePath, 'utf8');
    const dirnames = filenames.filter(filename => path.join(__dirname, modulePath, filename).indexOf('index.js') === -1);
    return dirnames;
}

function getData(modulePath, dirs, noModule) {
    dirs = dirs || [];
    let data = '', moduleName = '';
    for(let dir of dirs) {
        const filepath = path.join(__dirname, modulePath, dir);
        if(fs.lstatSync(filepath).isFile()) {
            const fileExt = path.extname(dir);
            dir = path.basename(dir, fileExt);
            moduleName = dir + fileExt;
        } else {
            moduleName = dir;
        }
        if(noModule) {
            data += `import './${moduleName}';\n`;
        } else {
            data += `import ${dir} from './${moduleName}';\n`; 
        }
    }

    data += `\n\n/** 导入模块总数：${dirs.length} */\n`;

    // console.log(data);
    return data;
}

function writeDataToEntry(modulePath, data) {
    const file = path.join(__dirname, modulePath, 'index.js');
    fs.writeFileSync(file, data, 'utf8');
}

for(let modulePath of modulePaths) {
    const dirnames = getDirnames(modulePath);
    const data = getData(modulePath, dirnames);
    writeDataToEntry(modulePath, data);
}

exports['writeDataToEntry'] = writeDataToEntry;
exports['getData'] = getData;
