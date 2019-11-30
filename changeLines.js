const path = require('path');
const fs = require('fs');
const fsCustom = require('./modules/fsCustom');
const readline = require('readline');

//修正するファイルがあるディレクトリ
const dirPath = path.resolve(__dirname, './datas');
const files = fsCustom.listFiles(dirPath);

for (const file of files) {
    const stream = fs.createReadStream(file, 'utf8');
    const reader = readline.createInterface({ input: stream });
    reader.on('line', (data) => {
        //修正処理
        const match = data.match(/ ("[A-Z]{3,7} \/.+?) .+?" [0-9]{3} /);
        if (match && match[1]) {
            fs.appendFileSync(`./results/changeLines.csv`, `${match[1]}"\n`, (err, data) => {
                if (err) console.log(err);
                else console.log('write end');
            });
        }
    });
}