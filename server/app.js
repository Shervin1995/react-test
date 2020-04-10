var express = require('express')
var app = express()
var path = require('path')

app.use(express.static('server/public'))

app.get('/',function (req,res) {
  res.sendFile(path.resolve(__dir + 'public/index.html'))
})

var server = app.listen(3000)
