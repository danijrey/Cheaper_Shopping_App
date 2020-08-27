const Provider = require('../models/provider.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { transporter, welcome, verify } = require('../utils/mail')

module.exports = {
  async all(req, res) {
    try {
      const provider = await Provider.find();
      res.status(200).json(provider);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async create(req, res) {
    try {
      const data = req.body;
      const password = await bcrypt.hash(data.password, 8);
      const provider = await Provider.create({
        providerEmail: data.providerEmail,
        name: data.name,
        lastname: data.lastname,
        company: data.company,
        nit: data.nit,
        password,
      });

      const token = jwt.sign({ id: provider._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24 * 365,
      });

      const mail = {
        from: '"Cheaper Team" <cheapercolombia@aol.com>',
        to: provider.providerEmail,
        subject: 'Bienvenido!',
        html: welcome(provider.name),
      }
      await transporter.sendMail(mail, (err) => {
        console.log(err);
      })

      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async show(req, res) {
    try {
      const { id } = req.params;
      const provider = await Provider.findById(id);
      res.status(200).json(provider);
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
      const provider = await Provider.findByIdAndUpdate(id, data, options);
      res.status(200).json(provider);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const provider = await Provider.findByIdAndDelete(id);
      res.status(200).json(provider);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
