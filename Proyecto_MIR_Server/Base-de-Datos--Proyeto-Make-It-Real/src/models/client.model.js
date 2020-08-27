const { Schema, model, models } = require('mongoose');

const emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const uniqueEmail = {
  validator(value) {
    return models.Client.findOne({ clientEmail: value })
      .then((client) => !client)
      .catch(() => false);
  },
  message: 'El email ya existe',
};

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Nombre es un campo requerido'],
    },
    lastname: {
      type: String,
      required: [true, 'Apellido es un campo requerido'],
    },
    clientEmail: {
      type: String,
      required: [true, 'Email es un campo requerido'],
      match: [emailTest, 'Correo invalido'],
      validate: [uniqueEmail],
    },
    password: {
      type: String,
      required: [true, 'Contraseña es un campo requerido'],
    },
  },
  {
    timestamps: true,
  }
);

const Client = model('Client', clientSchema);

module.exports = Client;
