const db = require('../database')

module.exports = { 

//     getProfile : (req, res) => {
//         db.query(`SELECT * FROM profil where userid = ${req.query.userId}`, (err, result) => {
//             if (err) throw err
//             res.send(result)
//         })
//       },

//       addAlamat : (req, res) => {
//         console.log(req.file)
//         let data = JSON.parse(req.body.data)
  
//         db.query(`INSERT INTO profil values (0, '${data.nama_profile}','${data.alamat_profile}', '${data.kecamatan}', '${data.kabupaten}', '${data.nomerhp}', '${req.file.path.replace(/\\/g, '/')}', '${data.userid}')`, (err, result) => {
//             if (err) throw err
//             res.send(result)
//         })
//     },

//     updateProfile : (req, res) => {

//         console.log(req.params.userId);

//    const query = `UPDATE profil SET nama_profile = '${req.body.nama_profile}', alamat_profile = '${req.body.alamat_profile}', kecamatan = '${req.body.kecamatan}', kabupaten = '${req.body.kabupaten}', nomerhp = '${req.body.nomerhp}' WHERE userid = ${req.params.userId}`
//    console.log(query);
   
//         db.query( query, (err, result) => {
//             if (err) throw err
//             res.send(result)
//         })
//     },

//     getDataUsername: (req, res) => {
        
//         db.query(`select * from users where username = "${req.query.username}"`, (err, result) => {
//             if (err) throw err
//             res.send(result)
//         })
//     }, 

//     getDataEmail: (req, res) => {
//         db.query(`select * from users where email = "${req.query.email}"`, (err, result) => {
//             if (err) throw err
//             res.send(result)
//         })
//     }, 

//     login: (req, res) => {
//         console.log(req.query)
//         db.query(`select * from users where username =  
//         "${req.query.username}" and password = "${req.query.password}"`, (err, result) => {
//             if(err) throw err
//             console.log(result)
//             res.send(result)
//         })
//     },

//     register: (req, res) => {
//         db.query(`insert into users values (0, "${req.body.username}","${req.body.email}","${req.body.password}", "user")`, (err, result) => {
//             if (err) throw err
//             res.send(result)
//         })
//     },

//     getProduct: (req, res) => {
//         db.query(`select * from manage_product`, (err, result) => {
//             if (err) throw err
//             res.send(result)
//         })
//     },

//     addProduct: (req, res) => {
//         // console.log(req)
//         let data = JSON.parse(req.body.data)
//         db.query(`insert into manage_product values (0, "${data.nama}", "${data.descc}", '${data.price}', "${req.file.path.split('\\').join('/')}", $)`, (err, result) => {
//             if (err) throw err
//             res.send(result)
//             console.log(result);
            
//         })
//     },

//     updateProduct: (req, res) => {

//         console.log(req.file.path)

//         db.query(`UPDATE manage_product SET nama = '${req.body.nama}', descc = '${req.body.descc}', price = '${req.body.price}', picture = '${req.file.path}' where id = ${req.params.id}`, (err, result) => {
//             if (err) throw err
//             res.send(result)
//         })
//     },

//     deleteProduct: (req, res) => {
//         db.query(`DELETE FROM manage_product where id = ${req.params.id}`, 
//         (err, result) => {
//             if (err) throw err
//             res.send (result)
//         })
//     },

//     getProductDetail: (req, res) => {
//         db.query(`select * from manage_product where id = ${req.query.id}`, (err, result) => {
//             if (err) throw err
//             res.send(result)
//         } )
//     },

//     addToCarts: (req, res) => {
    
//         db.query(`insert into carts (cartId, productid, userid, qty) values (0, ${req.body.productid},${req.body.userid},${req.body.qty})`, (err, result) => {
//             try {
//             if (err) throw err
//             res.send(result)
//             } catch (error) {
//                 console.log(error)
//             }
//         })
//     },
    
//     getAddToCarts: (req, res) => {
//         db.query(`select * from carts as c join manage_product as p on c.productid = p.id where c.userid = ${req.query.userId}`, (err, result) => {
//             if (err) throw err
//             res.send(result)
//         })
//     },

//     deleteCarts : (req, res) => {
//         console.log(req.body);
        
//         db.query(`DELETE FROM carts where cartId = ${req.params.cartId}`, 
//         (err, result) => {
//             if (err) throw err
//             res.send (result)
//         })
//     },

//     uploadtransaksi: (req, res) => {
//         console.log(req.file);
//         db.query(`insert into bukti_transaksi values (0, '${req.file.filename}') `, (err, result) => {
//             if (err) throw err
//             res.send(result)
//         })
//     },


//     categoryMakanan: (req, res) => {
//         db.query(`select * from manage_product where category = ${req.body.makanan}`, (err, result) => {
//             if (err) throw err 
//             res.send(result)
//         })
//     },

    getLogin: (req, res) => {
        db.query("SELECT * FROM data_aplkasi.login WHERE username= 'irfan@yahoo.com'", (err, result) => {
            res.send(result)
        })
    }

}
