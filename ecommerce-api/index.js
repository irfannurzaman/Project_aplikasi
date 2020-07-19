var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')

const port = 3000

const {
    authRouter
} = require('./2.router/index')

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1>Selamat datang</h1>')
})

app.use('/auth', authRouter)

app.use("/3.helper", express.static("3.helper"))
app.use("/5.helperprofile", express.static("5.helperprofile"))

app.listen(port, () => console.log('server yeyeyeye'))