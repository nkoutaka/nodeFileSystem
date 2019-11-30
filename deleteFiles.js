const path = require('path');
const fs = require('fs');
const fsCustom = require('./modules/fsCustom');

//削除するファイルのパス
const targets = ['/hoge/hoge.html', '/hoge/hoge2.html', '/hoge/hoge3.html'];

//削除するパスのリストファイル
//const datas = fs.readFileSync('./data/deleteFiles.csv', 'utf8');
//const targets = datas.split(/\n/);

for (const target of targets) {
    const filePath = path.resolve(__dirname, target);
    try {
        if (fsCustom.isExistFile(filePath)) {
            fs.unlinkSync(filePath);
            console.log(`${filePath}を削除しました。`);
        }
    } catch (err) {
        console.error('error:', err.message);
    }
};