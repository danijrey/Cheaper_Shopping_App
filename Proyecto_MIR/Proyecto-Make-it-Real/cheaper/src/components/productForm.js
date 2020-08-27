import React from "react";
import "./NewProduct.css";
import { Link } from "react-router-dom";

function ProductForm({
  id,
  name,
  picture,
  description,
  price,
  category,
  handleChange,
  handleSubmit,
}) {
  return (
    <div className="ProductDescription">
      <form className="ProductsForm" onSubmit={handleSubmit}>
        <div className="title">
          <label htmlFor="name">Nombre del producto</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ingresa el nombre del producto"
            onChange={handleChange}
            value={name}
          />
        </div>

        <div className="container-img">
          <input
            type="file"
            accept="image/*"
            name="picture"
            id="picture"
            className="file-img"
            onChange={picture}
          />
        </div>
        <textarea
          className="description-text"
          name="description"
          id="description"
          cols="35"
          rows="5"
          placeholder="Descripcion del producto"
          onChange={handleChange}
          value={description}
        />
        <div className="description-article  ">
          <div className="price-gral">
            <input
              className="price"
              type="text"
              name="price"
              id="price"
              placeholder="$"
              onChange={handleChange}
              value={price}
            />
            <h6>Precio</h6>
          </div>
        </div>

        <button className="create-product" type="submit">
          Publicar
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
