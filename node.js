const async = require('async')
const path = require('path')
const express = require('express')
const app = express()
const {execSync} = require('child_process')
const process = require('process')
const {debug} = require('console')
const os = require('os')
const ip = require('ip')

const buildDirName = 'build'
const port = 3000


let server = ''

process.env['REACT_APP_CONTAINER_NAME'] = os.hostname()
process.env['REACT_APP_CONTAINER_IP'] = ip.address()

async.series([
    () => {
        console.log('Builing frontend')
        execSync('npm run build')
        console.log('build finished')

        app.use(express.static(path.join(__dirname, buildDirName)))

        app.get('/*', function(req, res) {
            res.sendFile(path.join(__dirname, buildDirName, 'index.html'))
        })
        server = app.listen(port)
        console.log(`Server started on port ${port}`)
    }, 
    () => {
        console.log('App builded')
    }], () => console.log('App builded callback'))

process.on('SIGINT', () => {
    server.close(() => {
        debug('\n SIGINT. Server shitdown')
    })
})
process.on('SIGTERM', () => {
    server.close(() => {
        debug('\n SIGTERM. Server shitdown')
    })
})
