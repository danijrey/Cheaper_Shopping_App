import React from 'react';
import './createProduct.css';
import {Link} from "react-router-dom"

class CreateProduct extends React.Component {

    render() {
      return (
        <span className ="span-createProduct">
          <Link to="/products/create" className ="btn-createProduct" data-testid="NewProductLink">Crear Producto</Link>
        </span>

        )

    }
}

export default CreateProduct;
