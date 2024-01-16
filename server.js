const logEvents = require('./logEvents')
const EventEmitter = require('events')
const http = require('http')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises

class Emitter extends EventEmitter { }

myEmitter = new Emitter()

const PORT = process.env.PORT || 3500

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))