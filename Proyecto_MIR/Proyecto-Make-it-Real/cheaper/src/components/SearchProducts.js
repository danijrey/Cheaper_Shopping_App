import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import './SearchProducts.css';
import NavBar from './NavBar.js'
import { Link } from "react-router-dom"
import axios from "axios";


class SearchProducts extends React.Component {
  state = {
    name: "",
    products: []
  };


  componentDidMount() {
    console.log(this.props)

    const { products, ...data } = this.props.match.params

    axios({
      method: "POST",
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `/providers/search/${this.props.match.params.name}`,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        this.setState({ products: response.data })
        console.log(response.data);
      })
      .catch(error => {
        // history.push('/');
      })
  }

  componentDidUpdate() {
    console.log(this.props)

    const { products, ...data } = this.props.match.params

    axios({
      method: "POST",
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `/providers/search/${this.props.match.params.name}`,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        this.setState({ products: response.data })
        console.log(response.data);
      })
      .catch(error => {
        // history.push('/');
      })
  }

  render() {

    const { products } = this.state;

    return (
      <div className="ProductSearch" key={this.props.match.params.name}>
        <NavBar />

        <h5 className="title-search">Te damos las mejores opciones</h5>
        <div className="gridContainer">
          {products.map((data) => {
            return (
              <div className="row-List">

                <div className="cards" key={data._id}>
                  <img
                    src={data.picture}
                    className="Imagenes"
                    alt={data.picture} />
                  <h3 className="H3-Productos">
                    {data.name}
                  </h3>
                  <p className="p-Productos">
                    {data.description}
                  </p>
                  <br />
                  <Link to={`/providers/products/show/${data._id}`} className="VerMas" >Ver más</Link>
                </div>
              </div>
            );
          })}
        </div>
        <footer className="footer">
          <img src={logo} className="NavBar-Logo-Home" alt="Logo"></img>
          <p className="copyright"> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> All rights reserved 2020 </p>
        </footer>

      </div>

    )
  }
}


export default SearchProducts;