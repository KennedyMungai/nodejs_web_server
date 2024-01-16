const logEvents = require('./logEvents')
const EventEmitter = require('events')

class Emitter extends EventEmitter { }

myEmitter = new Emitter()

// myEmitter.on('log', (msg) => logEvents(msg))