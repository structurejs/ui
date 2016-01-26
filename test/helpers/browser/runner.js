var express     = require('express'),
    path        = require('path'),
    server      = express(),
    serveStatic = require('serve-static')

server.use('/css', serveStatic(path.join(__dirname, '/css')))
server.use('/js', serveStatic(path.join(__dirname, '/js')))

server.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'runner.html'))
})

server.listen(4567)
console.log('Test Runner listening on localhost:4567')
