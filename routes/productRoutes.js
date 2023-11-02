const express = require('express')
const ProductRouter = express.Router()

const {AllProducts,getProduct,addProduct,updateProduct,deleteProduct} = require('../controllers/productController')

ProductRouter.get('/getall',AllProducts)

ProductRouter.post('/add',addProduct)

ProductRouter.get('/get/:id',getProduct)

ProductRouter.patch('/update/:id',updateProduct)

ProductRouter.delete('/delete/:id',deleteProduct)

module.exports = {ProductRouter}