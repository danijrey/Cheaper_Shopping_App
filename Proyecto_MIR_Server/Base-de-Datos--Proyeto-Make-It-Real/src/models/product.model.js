const { Schema, model } = require("mongoose");

const productSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Nombre es un campo requerido"],
		},
		picture: {
			type: String,
			required: [true, "Foto es un campo requerido"],
		},
		price: {
			type: Number,
			default: 0,
			required: [true, "Precio es un campo requerido"],
		},
		category: {
			type: String,
			enum: [
				"panaderia",
				"lacteos",
				"verduras",
				"carnes",
				"abarrotes",
				"cuidadoPersonal",
				"belleza",
				"hogar",
				"aseoHogar",
			],
			required: [true, "Categoría es un campo requerido"],
		},
		description: {
			type: String,
			required: [true, "Descripción es un campo requerido"],
			maxlength: [50, "La descripción debe contener menos de 50 letras"],
		},
	},
	{
		timestamps: true,
	}
);

const Product = model("Product", productSchema);

module.exports = Product;
