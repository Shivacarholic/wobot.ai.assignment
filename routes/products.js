const express = require('express');
const { Product } = require('../models/product'); //, validateProduct
const router = express.Router();


router.get('/', async (req, res) => {

    const products = await Product.find().sort('name');
    res.send(products);
});



router.post("/", async (req, res) => {
    const { error } = validateProduct(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let product = new Product(req.body);

    product = await product.save();
    res.send(product);
});

module.exports = router;
