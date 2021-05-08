const pako = require('pako')
const fs = require('fs')

fs.readFile('./bc9dec9fd8bd26e00e', null, function (err, data) {
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