import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "./SearchProductsClients.css";
import NavBarClient from "./NavBarClient.js";
import { Link } from "react-router-dom";
import agregarCarrito from "../assets/agregarCarrito.png";
import axios from "axios";

class SearchProductsClients extends React.Component {
  state = {
    name: "",
    cant: 1,
    products: [],
    cartList: [],
  };

  componentDidMount() {
    console.log(this.props);

    const { products, ...data } = this.props.match.params;

    axios({
      method: "POST",
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `/clients/search/${this.props.match.params.name}`,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        this.setState({ products: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        // history.push('/');
      });
  }

  componentDidUpdate() {
    console.log(this.props);

    const { products, ...data } = this.props.match.params;

    axios({
      method: "POST",
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `/clients/search/${this.props.match.params.name}`,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        this.setState({ products: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        // history.push('/');
      });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleClick = (e) => {
    this.setState({ cant: this.state.cant + 1 });
  };

  render() {
    const { products } = this.state;

    const handleSubmit = (id, picture, name, price, cant) => {
      return (e) => {
        e.preventDefault();

        let newArr = localStorage.getItem("list");
        // let arr = [];
        if (newArr === null) {
          newArr = [];
        } else {
          newArr = JSON.parse(localStorage.getItem("list")); //Convertimos en localStorage en un Objeto
        }
        //Estamos obteniendo los item que necesitamos renderizar en la lista del carrito
        let newProd = {
          id: id,
          picture: picture,
          name: name,
          price: price,
          cant: cant,
        };
        let check = newArr.filter((item) => item.id === id);
        if (check.length > 0) {
          newArr.forEach((item, idx) => {
            if (item.id === id) {
              newArr[idx] = { ...item, cant: parseInt(cant) + item.cant };
            }
          });
        } else {
          newArr.push(newProd);
        }
        localStorage.setItem("list", JSON.stringify(newArr)); //Covertimo el storage en un Json

        // arr = localStorage.getItem("cartList");
        // if (arr === null) {
        //   arr = localStorage.setItem("cartList", id);
        // } else {
        //   arr = localStorage.setItem("cartList", arr.concat(",", id));
        // }
      };
    };

    return (
      <div className="ProductSearch" key={this.props.match.params.name}>
        <NavBarClient />

        <h4 className="title-search">Te damos las mejores opciones</h4>
        <div className="gridClient_Container">
          {products.map((data) => {
            return (
              <div className="row-List">
                <div className="cardsClient" key={data._id}>
                  <img
                    src={data.picture}
                    className="img-Products"
                    alt={data.picture}
                  />
                  <div>
                    <h3 className="title-Products">{data.name}</h3>
                    <h5 className="desc-Products">
                      <br />

                      {data.description}
                    </h5>
                  </div>
                  <div className="div-wrapperUno">
                    <h6 className="price-Products">
                      Precio:
                      {<br />}
                      {data.price}
                    </h6>
                    <Link
                      to={`/clients/products/show/${data._id}`}
                      className="VerMasClient"
                    >
                      Ver más
                    </Link>
                  </div>
                  <form
                    onSubmit={handleSubmit(
                      data._id,
                      data.picture,
                      data.name,
                      data.price,
                      this.state.cant
                    )}
                    key={data._id}
                  >
                    <button
                      type="submit"
                      className="btn-ShopingCart"
                      alt="Agregar"
                    >
                      <img
                        src={agregarCarrito}
                        className="shopingCartClients-Products"
                      />
                    </button>

                    <input
                      type="number"
                      className="input-price-Products"
                      placeholder="#"
                      name="cant"
                      onChange={this.handleChange}
                      value={this.state.cant}
                    />
                  </form>
                </div>
              </div>
            );
          })}
        </div>
        <footer className="footer">
          <img src={logo} className="NavBar-Logo-Home" alt="Logo"></img>
          <p className="copyright">
            {" "}
            <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> All rights
            reserved 2020{" "}
          </p>
        </footer>
      </div>
    );
  }
}

export default SearchProductsClients;
/* 
const handleSubmit = (id) => {
    return (e) => {
        e.preventDefault();
        let prevCart = localStorage.getItem("cartList");

        if (prevCart === null) {

            localStorage.setItem("cartList", id);
        } else {
            localStorage.setItem("cartList", prevCart.concat(id));
        }
    }
} */
