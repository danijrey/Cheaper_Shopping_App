const Product = require('../models/product.model.js');

module.exports = {
    async all(req, res) {
        try {
            const search = await Product.find();
            res.status(200).json(search);
        } catch (error) {
            console.log(error);
        }
    },
    async show(req, res) {
        try {
            console.log(req.params)
            const search = await Product.find(req.params);
            console.log(search)
            res.status(200).json(search);
        } catch (error) {
            console.log(error);
        }
    },


};

/* console.log(req.params.filter)
const search = await Product.find(req.params.filter); */