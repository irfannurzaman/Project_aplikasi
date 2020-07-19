var express = require('express')
var app = express()
const port = 3000
var cors = require('cors')
var bodyParser = require('body-parser')
var multer = require('multer')


app.use(bodyParser.json())
app.use(cors())
app.use('/files', express.static('uploads'))



let multerStorageConfigg = multer.diskStorage({
    destination : (req, files, cb) => {
        cb (null, "./fotoprofile")
    },
    filename : (req, file, cb) => {
        cb(null, `PRD-${Date.now()}.${file.mimetype.split("/")[1]}`)
    }
})

let filterConfigg = (req, file, cb) => {
    console.log(file)
    if(file.mimetype.split("/")[1] == "png" || file.mimetype.split("/") [1] == "jpeg"){
        cb(null, true)
    } else {
        req.validation = {error : true, msg : "File must be an image"}
        cb(null, false)
    }
}


module.export = {
    filterConfigg,
    multerStorageConfigg
}