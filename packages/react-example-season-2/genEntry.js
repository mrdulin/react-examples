"use strict";

const fs = require('fs');
const path = require('path');

const modulePaths = [
    '../app/common/js/components',
    '../app/common/js/basecomponent'
];

function getDirnames(modulePath) {
    const filenames = fs.readdirSync(path.join(__dirname, modulePath), 'utf8');
    const dirnames = filenames.filter(filename => path.join(__dirname, modulePath, filename).indexOf('index.js') === -1);
    return dirnames;
}

function getData(context, modulePath, dirs, noModule) {
    dirs = dirs || [];
    let data = '', moduleName = '';
    for(let dir of dirs) {
        const filepath = path.join(context, modulePath, dir);
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

function writeDataToEntry(context, modulePath, data) {
    const file = path.join(context, modulePath, 'index.js');
    fs.writeFileSync(file, data, 'utf8');
}

for(let modulePath of modulePaths) {
    const dirnames = getDirnames(modulePath);
    const data = getData(__dirname, modulePath, dirnames);
    writeDataToEntry(__dirname, modulePath, data);
}

exports['writeDataToEntry'] = writeDataToEntry;
exports['getData'] = getData;
