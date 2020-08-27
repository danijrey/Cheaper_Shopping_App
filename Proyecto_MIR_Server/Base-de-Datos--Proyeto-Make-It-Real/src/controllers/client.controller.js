const Client = require('../models/client.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { transporter, welcome, verify } = require('../utils/mail')

module.exports = {
  async all(req, res) {
    try {
      const client = await Client.find();
      res.status(200).json(client);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async create(req, res) {
    try {
      const data = req.body;
      const password = await bcrypt.hash(data.password, 8);
      const client = await Client.create({
        clientEmail: data.clientEmail,
        name: data.name,
        lastname: data.lastname,
        password,
      });

      const token = jwt.sign({ id: client._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24 * 365,
      });

      const mail = {
        from: '"Cheaper Team" <cheapercolombia@aol.com>',
        to: client.clientEmail,
        subject: 'Bienvenido!',
        html: welcome(client.name),
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
      const client = await Client.findById(id);
      res.status(200).json(client);
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
      const client = await Client.findByIdAndUpdate(id, data, options);
      res.status(200).json(client);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const client = await Client.findByIdAndDelete(id);
      res.status(200).json(client);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
