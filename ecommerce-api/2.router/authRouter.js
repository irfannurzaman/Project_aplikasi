var express = require('express')
var router = express.Router()


const {authController} = require('../1.controller/index')
console.log('sukses1', authController.getLogin)
var multer = require('multer')
var upload = require('../3.helper/multer')
var { multerStorageConfig, filterConfig} = require('../4.helper')
var { multerStorageConfigg, filterConfigg} = require('../5.helperprofile')

let lalala = multer.diskStorage({
    destination : (req, files, cb) => {
        cb (null, "./5.helperprofile/fotoprofile")
    },
    filename : (req, file, cb) => {
        cb(null, `PRD-${Date.now()}.${file.mimetype.split("/")[1]}`)
    }
})

let hahaha = (req, file, cb) => {
    if(file.mimetype.split("/")[1] == "png" || file.mimetype.split("/") [1] == "jpeg"){
        cb(null, true)
    } else {
        req.validation = {error : true, msg : "File must be an image"}
        cb(null, false)
    }
}
 
let uploadtransaksi = multer({
    // nentuin fale masuk kemana
    storage : multerStorageConfig,
    // filter data
    fileFilter : filterConfig
})


let addalamat = multer ({

    storage : lalala,
    fileFilter: hahaha

})



// router.get('/login', authController.login)
// router.post('/register', authController.register)
// router.get('/getdatausername', authController.getDataUsername)
// router.get('/getdataemail', authController.getDataEmail)
// router.get('/getproduct', authController.getProduct)
// router.post('/addproduct', upload, authController.addProduct)
// router.delete('/deleteproduct/:id', authController.deleteProduct)
// router.get('/getproductdetail', authController.getProductDetail)
// router.post('/postaddtocarts', authController.addToCarts)
// router.get('/getaddtocarts', authController.getAddToCarts)
// router.delete('/deletecarts/:cartId', authController.deleteCarts)
// router.post('/uploadtransaksi', uploadtransaksi.single('file') , authController.uploadtransaksi)
// router.post('/addalamat', addalamat.single('filefoto'),authController.addAlamat)
// router.get('/getprofile', authController.getProfile)
// router.put('/updateprofile:userId', authController.updateProfile)
// router.put('/updateproduct:id',upload, authController.updateProduct)
// router.get('/categorymakanan', authController.categoryMakanan)
router.get('/getdataLogin', authController.getLogin)

module.exports = router