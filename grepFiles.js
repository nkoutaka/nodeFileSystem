const path = require('path');
const fs = require('fs');
const fsCustom = require('./modules/fsCustom');

//検索ワードの配列
const keywords = ['/hoge/hoge.html', '/hoge/hoge2.html', '/hoge/hoge3.html']

//検索ワードのリストファイル
//const datas = fs.readFileSync('./data/grepFiles.csv', 'utf8');
//const keywords = datas.split(/\n/);

//検索対象のディレクトリ
const dirPath = path.resolve(__dirname, './');
const files = fsCustom.listFiles(dirPath);


for (let keyword of keywords) {

    const results = [keyword];

    keyword = keyword.replace(/\./g, '\\.');

    for (const file of files) {
        //正規表現で検索ワードを生成
        let regex = `("|'|\\|)(@\\{)?${keyword}.*`;
        let data = fs.readFileSync(file, 'utf8');
        let count = (data.match(new RegExp(regex, 'g')) || []).length;
        if (count) {
            results.push(file);
        }
    };
    fs.appendFileSync(`./results/grepFiles.csv`, results.join(',') + '\n', (err, data) => {
        if (err) console.log(err);
        else console.log('write end');
    });

};
