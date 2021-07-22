const pako = require('pako')
const fs = require('fs')

// 解压
fs.readFile('./json/bc9dec9fd8bd26e00e', null, function (err, data) {
  if (err) {
    console.log(err)
  }
  try {
    var json = pako.inflate(data.buffer, {to: 'string'});
    console.log(json)
  } catch (e) {
    console.log(e)
  }
})

// 压缩
fs.readFile('./json/bc9dec9fd8bd26e00e.json', null, function (err, data) {
  if (err) {
    console.log(err)
  }
  try {
    // TODO: 生成的文件相对之前有两倍大
    const buffer = pako.deflate(data, { level: 9 });
    fs.writeFile('./json/bc9dec9fd8bd26e00e-1', buffer, 'binary', function (err) {
      console.log(err)
    })
  } catch (e) {
    console.log(e)
  }
})