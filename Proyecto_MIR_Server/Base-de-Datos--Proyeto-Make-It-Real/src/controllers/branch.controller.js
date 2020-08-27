const Branch = require('../models/branch.model.js');

module.exports = {
  async all(req, res) {
    try {
      const branch = await Branch.find();
      res.status(200).json(branch);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async create(req, res) {
    try {
      const data = req.body;
      const branch = await Branch.create(data);
      res.status(200).json(branch);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async show(req, res) {
    try {
      const { id } = req.params;
      const branch = await Branch.findById(id);
      res.status(200).json(branch);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async edit(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const options = {
        new: true,
        useFindAndModify: false,
      };
      const branch = await Branch.findByIdAndUpdate(id, data, options);
      res.status(200).json(branch);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const branch = await Branch.findByIdAndDelete(id);
      res.status(200).json(branch);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
