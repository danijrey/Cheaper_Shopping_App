const { Schema, model } = require('mongoose');

const branchSchema = new Schema(
  {
    branchName: {
      type: String,
      required: [true, 'Sucursal es un campo requerido'],
    },
    branchAdress: {
      type: String,
      required: [true, 'Dirección es un campo requerido'],
    },
  },
  {
    timestamps: true,
  }
);

const Branch = model('Branch', branchSchema); //Modelo

module.exports = Branch;
