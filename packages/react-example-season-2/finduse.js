const exec = require('child_process').exec;
const path = require('path');
const fs = require('fs');
const genEntry = require('./genEntry');

const args = process.argv.slice(2);
const context = process.cwd();

//源目录
const src = args[0];
const srcAbsolute = path.join(context, src);
//目标目录
const dist = args[1];
const distAbsolute = path.join(context, dist);

//如果上述两个目录不存在，退出脚本执行并提示
if (!fs.existsSync(srcAbsolute) || !fs.existsSync(distAbsolute)) {
  throw new Error('Source directory or dist directory does not exist, please check.');
}

//递归比较src和dist目录，过滤出只在src存在的文件，并输出文件名
exec(`diff -qr ${srcAbsolute} ${distAbsolute} | grep ${src} | grep -v 'index.js' | grep -E "^Only in*" | sed -n 's/[^:]*: //p' | nl`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }

  console.log(`\n只存在于src中的文件: \n\n${stdout}`);
  console.log(`错误: ${stderr || '无'}\n`);

  const datas = outputStdoutToData(stdout);
  // console.log(datas);

  //读取src目录下的所有文件，排除生成的index.js文件
  let filenames = fs.readdirSync(srcAbsolute, 'utf8');
  filenames = filenames.filter(ridIndex);
  // console.log(filenames);

  //从src目录下读取的文件中排除diff出的文件，做差集
  const usedFilenames = diff(filenames, datas);
  // console.log(usedFilenames);

  console.log(`源目录总文件数:  ${filenames.length}\n`);
  console.log(`没有使用的文件数: ${datas.length}\n`);
  console.log(`使用的文件数： ${usedFilenames.length}\n`);

  const dataToWrite = genEntry.getData(context, src, usedFilenames, true);
  // console.log(dataToWrite);
  genEntry.writeDataToEntry(context, src, dataToWrite);

});

//不能用indexOf，有可能文件名有包含关系,例如 health_all.png 和 h_all.png
// const isFind = datas.indexOf(filename) !== -1;
function diff(a1, a2) {
  return a1.concat(a2).filter(function (val, index, arr) {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}

//除去index.js文件
function ridIndex(data) {
  return data.indexOf('index.js') === -1;
}

//将stdout格式化并存储
function outputStdoutToData(stdout) {
  let datas = stdout.replace(/[\n\t\r]/g, '').split(' ');
  datas = datas.filter(data => data.length).map(data => data.replace(/^\d+/, '')).filter(ridIndex);
  return datas;
}
