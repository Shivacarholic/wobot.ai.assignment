const mongoose = require('mongoose');
const Joi = require('joi');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },

    discription: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },

    quantity: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    price: {        
        type: Number,
        required: true
    }

});
const Product = mongoose.model('Product',productSchema);
function validateProduct(product) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        discription: Joi.string().min(5).max(50).required(),
        quantity: Joi.number().min(1).max(50).required(),
        price: Joi.number().required()
    };

    return Joi.validate(product, schema);
}
exports.productSchema = productSchema;
exports.Product = Product;
exports.validateProduct = validateProduct;