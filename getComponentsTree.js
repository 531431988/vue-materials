const fs = require('fs-extra')
const path = require('path')
const resolve = dir => path.join(__dirname, './', dir)
/**
 * 获取所有指定后缀名文件
 * @param 文件夹目录
 * @param 文件后缀名
 */
function findFileBySuffix (dirs, fileName) {
  let files = []
  let dirArray = fs.readdirSync(dirs)
  for (let d of dirArray) {
    let filePath = path.resolve(dirs, d)
    let stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      files = files.concat(findFileBySuffix(filePath, fileName))
    }
    if (stat.isFile() && path.extname(filePath) === fileName) {
      files.push(filePath)
    }
  }
  return files
}

// 写入json文件
const outPutFileJson = (url, data) => {
  let path = resolve(url)
  fs.outputFile(path, JSON.stringify(data), err => {
    console.log(err)
  })
}

// 循环读取json文件信息
let componentsTree = []
let url = findFileBySuffix('./components/', '.json')
url.forEach(item => {
  fs.readFile(item, 'utf8', function (err, data) {
    if (err) console.log(err)
    componentsTree.push(JSON.parse(data))
    outPutFileJson('./public/componentsTree.json', componentsTree)
    outPutFileJson('./dist/componentsTree.json', componentsTree)
  })
})
