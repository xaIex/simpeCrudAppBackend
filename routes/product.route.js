const express = require("express");
const Product = require("../models1/product.models1");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');


router.get('/', getProducts);
router.get("/:id",getProduct);
router.post("/", createProduct);//ctrl + space then press enter to automatically paste it in the const {getproduct...}
//update
router.put("/:id", updateProduct);

//delete
router.delete("/:id", deleteProduct);


module.exports = router;