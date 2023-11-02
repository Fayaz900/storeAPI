const Product = require('../models/productModel')

// GET ALL PRODUCT
const AllProducts =async(req,res)=>{
    es.send('get ALL product')
}

// ADD NEW PRODUCT
const addProduct =async(req,res)=>{
    res.send('add a product')
    }

// GET A SINGLE PRODUCT
const getProduct =async(req,res)=>{
    res.send('get single product')
}


// UPDATE PRODUCT
const updateProduct =(req,res)=>{
    res.send('update product')
}


// DELETE PRODUCT
const deleteProduct =async(req,res)=>{

    }



module.exports = {AllProducts,getProduct,addProduct,updateProduct,deleteProduct}