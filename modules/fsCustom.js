const fs = require('fs');

/**
 * 指定したディレクトリ配下のファイルを再帰的にリストアップする
 * @param {string} dirPath 対象ディレクトリのフルパス
 * @return {Array<string>} ファイルのフルパス
 */
const listFiles = dirPath => {
    const files = [];
    const paths = fs.readdirSync(dirPath);

    for (let name of paths) {
        try {
            const path = `${dirPath}/${name}`;
            const stat = fs.statSync(path);

            switch (true) {
                case stat.isFile():
                    files.push(path);
                    break;

                case stat.isDirectory():
                    files.push(...listFiles(path));
                    break;

                default:
            }
        } catch (err) {
            console.error('error:', e.message);
        }
    }

    return files;
};

/**
 * 指定したフルパスのファイルが存在するか確認する
 * @param {string} filePath 対象とするファイルのフルパス
 * @return {boolean}
 */
const isExistFile = filePath => {
    try {
        fs.statSync(filePath);
        return true
    } catch (err) {
        if (err.code === 'ENOENT') return false
    }
};

module.exports = {
    isExistFile: isExistFile,
    listFiles: listFiles
};