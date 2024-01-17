const moment = require('moment')
const { v4: uuid } = require('uuid')


const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logEvents = async (message, logName) => {
    const dateTime = `${moment(new Date()).format('LLLL')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n\n`
    console.log(logItem)

    try {
        if(!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'))
        }
        
        await fsPromises.appendFile(path.join(__dirname, 'logs', logName), logItem)
    } catch (err) {
        console.error(err)
    }
}

module.exports = logEvents