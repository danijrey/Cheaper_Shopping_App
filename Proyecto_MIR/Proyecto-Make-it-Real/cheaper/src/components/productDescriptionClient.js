import React from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import "./productDescription.css";
import NavBarClient from "./NavBarClient.js";
import agregarCarrito from "../assets/agregarCarrito.png";
import { Link } from "react-router-dom";

class ProductDescriptionClient extends React.Component {
  state = {
    sideDrawerOpen: false,
    name: "",
    description: "",
    price: "",
    cant: 1,
    id:'',
    name: '',
    description: '',
    price: 0,
  };

  componentDidMount() {
    console.log(this.props);
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `/products/show/${this.props.match.params.id}`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        this.setState(response.data);
      })
      .catch((error) => {
        localStorage.removeItem("token");
        // history.push('/');
      });
  }

  render() {
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
        localStorage.setItem("list", JSON.stringify(newArr));
      };
    };
/*      handleSubmit = (id) => {
      let arr = [];
      return (e) => {
        e.preventDefault();
        arr = localStorage.getItem("cartList");
        if (arr === null) {
          arr = localStorage.setItem("cartList", id);
        } else {
          arr = localStorage.setItem("cartList", arr.concat(",", id));
        }
        console.log(arr)
      }
    } */
    return (
      <div className="ProductDescription">
        <NavBarClient />

 functionCar
        <h3 className="description-title">{this.state.name}</h3>

        <form onSubmit={handleSubmit(`${this.props.match.params.id}`)}>
 
            <button type="submit"
              className="btn-add-shoppingList"
              alt="Agregar">
            Agregar a lista de compras
            </button>

        </form>

        <div className="ProductDescription-Card" key={this.state._id}>
          <div className="container-img">
            <img
              className="img"
              src={this.state.picture}
              alt={this.state.picture}
            />
          </div>
          <div className="paragraph">
            <p className="paragraph-description">{this.state.description}</p>
          </div>

          <div className="description-article  ">
            <div className="price-gral">
              <h5>Precio</h5>
              <h6 className="price">{this.state.price}</h6>
            </div>
            <div className="cant-gral">
              <h5 className="cant">1</h5>
              <h6>Cantidad</h6>
            </div>
          </div>
        </div>
        <div className="buttons">
          <form
            onSubmit={handleSubmit(
              this.state._id,
              this.state.picture,
              this.state.name,
              this.state.price,
              this.state.cant
            )}
            key={this.state._id}
          >
            <button
              type="submit"
              className="btn-ShopingCart-Description"
              alt="Agregar"
            >
              <img
                src={agregarCarrito}
                className="shopingCartClients-Products-img"
              />
            </button>

            <input
              type="number"
              className="input-price-Products-Description"
              placeholder="Cantidad"
              name="cant"
              onChange={this.handleChange}
              value={this.state.cant}
            />
          </form>
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
export default ProductDescriptionClient;
