var express = require("express")
var app = express()
const port = 8080
var cors = require("cors")
var bodyParser = require("body-parser")
var multer = require("multer")


app.use(bodyParser.json())
app.use(cors())

let multerStorageConfig = multer.diskStorage({
    destination : (req, files, cb) => {
        cb (null, "./3.helper/uploads")
    },
    filename : (req, file, cb) => {
        cb(null, `PRD-${Date.now()}.${file.mimetype.split("/")[1]}`)
    }
})

let filterConfig = (req, file, cb) => {
    if(file.mimetype.split("/")[1] == "png" || file.mimetype.split("/") [1] == "jpeg"){
        cb(null, true)
    } else {
        req.validation = {error : true, msg : "File must be an image"}
        cb(null, false)
    }
}

let upload = multer({
    storage : multerStorageConfig,
    fileFilter : filterConfig
})

module.exports = upload.single('browse_file')