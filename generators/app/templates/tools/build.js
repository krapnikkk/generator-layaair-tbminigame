const fs = require('fs')//文件操作
const path = require('path')//路径
const child_process = require('child_process')//命令行用
const readline = require('readline');//按行文件用
const os = require("os");

function public() {

    // 校验是否以及存在发布项目
    if (!checkRelease("../release/taobaominiapp")) {
        console.log("请先发布项目！");
        return;
    }

    //复制tbmini文件夹到发布后的淘宝文件
    console.log(`开始复制文件！`);
    copy('./libs', '../release/taobaominiapp/node_modules/layaengine/libs/min');
    console.log(`复制文件完成！`);

    //todo 项目资源自动上传到cdn

    //删除UI和sound文件
    // let deletePath = [
    // 	'/res/UI',
    // 	'/sound',
    // ]
    // for (var i = 0; i < deletePath.length; i++) {
    // 	deleteFolderRecursive("./release/taobaominiapp/pages/index" + deletePath[i])
    // }

    //修改bundle.js，加入fariygui文件
    console.log(`开始修改文件！`);
    modifyFile("../release/taobaominiapp/pages/index/js/bundle.js", ['var fairygui = window.fairygui;', 'var fgui = window.fgui;'])
    console.log(`修改文件完成！`);

    //导入依赖文件
    if (!checkRelease('../release/taobaominiapp/node_modules/@tbmp')) {// 无需重复install
        console.log(`开始安装小程序依赖！`);
        installDependence();
        console.log(`安装小程序依赖完成！`);
    } else {
        console.log(`已存在依赖，无需重复安装小程序依赖！`);
    }


}

function checkRelease(from) {
    let result = false;
    try {
        const fromPath = path.resolve(from);
        let stat = fs.statSync(fromPath);
        result = stat.isDirectory();
    } catch (e) {
        // console.log(e);
    }
    return result;
}

//复制文件夹
async function copy(from, to) {
    const fromPath = path.resolve(from)
    const toPath = path.resolve(to)
    await checkFile(toPath);
    let paths = fs.readdirSync(fromPath);
    paths.forEach(function (item) {
        const newFromPath = fromPath + '/' + item
        const newToPath = path.resolve(toPath + '/' + item)

        let stat = fs.statSync(newFromPath);
        if (stat.isFile()) {
            copyFile(newFromPath, newToPath)
        } else if (stat.isDirectory()) {
            copy(newFromPath, newToPath)
        }
    })
}

const checkFile = async (toPath) => {
    return new Promise((resolve, reject) => {
        fs.access(toPath, function (err) {
            if (err) {
                fs.mkdirSync(toPath)
            }
            resolve();
        })
    })
}

//复制文件
function copyFile(from, to) {
    fs.copyFileSync(from, to)
}

//删除文件夹
function deleteFolderRecursive(from) {
    var files = [];
    const fromPath = path.resolve(from)
    if (fs.existsSync(fromPath)) {
        files = fs.readdirSync(fromPath);
        files.forEach(function (file, index) {
            var curPath = fromPath + "/" + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }

        });

        fs.rmdirSync(fromPath);
    }
};

//修改文件
function modifyFile(filePath, contents) {
    filePath = path.resolve(filePath)
    readFileToArr(filePath, (arr) => {
        for (var i = 0; i < contents.length; i++) {
            arr.splice(5, 0, contents[i]);//写死从第五行开始
        }
        fs.writeFileSync(filePath, arr[0] + os.EOL);
        for (var i = 1; i < arr.length; i++) {
            fs.appendFileSync(filePath, arr[i] + os.EOL);
        }
    });
}

//写入内容 覆盖原内容
function writeFile(filePath, contents) {
    filePath = path.resolve(filePath)
    for (var i = 0; i < contents.length; i++) {
        fs.writeFileSync(filePath, contents[i] + os.EOL);
    }
}
//追加内容 写入尾部
function appendFile(filePath, contents) {
    filePath = path.resolve(filePath)
    for (var i = 0; i < contents.length; i++) {
        fs.appendFileSync(filePath, contents[i] + os.EOL);
    }
}
//按行读取内容
function readFileToArr(fReadName, callback) {
    let fRead = fs.createReadStream(fReadName);
    let objReadline = readline.createInterface({
        input: fRead
    });
    let arr = new Array();
    objReadline.on('line', line => {
        arr.push(line);
    });
    objReadline.on('close', () => {
        callback(arr);
    });
}

//npm命令
function exec(cmdStr) {
    child_process.execSync(cmdStr);
}

function installDependence() {
    var cmdStr = 'cd ../release/taobaominiapp && npm i -S @tbmp/mp-cloud-sdk';
    exec(cmdStr);
}

public();