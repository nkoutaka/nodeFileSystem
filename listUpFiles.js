const path = require('path');
const fs = require('fs');
const fsCustom = require('./modules/fsCustom');

//対象ディレクトリ
const dirPath = path.resolve(__dirname, './');
const files = fsCustom.listFiles(dirPath);

fs.appendFileSync(`./results/listUpFiles.csv`, files.join('\n'), (err, data) => {
    if (err) console.log(err);
    else console.log('write end');
});