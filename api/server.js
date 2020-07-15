const express = require('express')
const helmet = require('helmet') //used for additional security for express

const carsRouter = require('../cars/cars-router')

const server = express ()

server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => {
    res.send('<h1>API upand running </h1>')
})

server.use('/api/cars', carsRouter)

module.exports = server