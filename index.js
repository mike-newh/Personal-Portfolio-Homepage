const express = require('express')
const server = express()

server.set('view engine', 'ejs')

server.use(express.static('public'))

server.get('/', (req, res)=>{
    res.render('home.ejs')
})

module.exports = server