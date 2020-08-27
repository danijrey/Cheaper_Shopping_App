const Product = require('../models/product.model');

module.exports = {
  async all(req, res) {
    try {
      const product = await Product.find();
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async create(req, res) {
    try {
      const { file, ...data } = req.body;
      console.log(req.body);
      const product = await Product.create({
        ...data,
        picture: file.secure_url,
      });
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async show(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
  },
  async edit(req, res) {
    try {
      const { id } = req.params;
      const { file, ...data } = req.body;
      const options = {
        new: true,
        useFindAndModify: false,
      };
      const product = await Product.findByIdAndUpdate(id, {
        ...data,
        picture: file.secure_url,
      });
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
