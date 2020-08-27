import React from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import NavBar from "./NavBar.js";
import "./productDescription.css";
import { Link } from "react-router-dom";

class ProductDescription extends React.Component {
  state = {
    name: "",
    description: "",
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
      })
  };

deleteProduct() { 
  axios({
    method: "DELETE",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: `/products/destroy/${this.props.match.params.id}`
    }
  )
  .then(({ data }) => {
    this.props.history.push("/providers")
  });
}
 

    
  render() {
    return (
      <div className="ProductDescription">
        <NavBar />

        <div className="buttons">
          <Link to={`/products/edit/${this.props.match.params.id}`}><button className="edit">Editar producto</button></Link>
          <Link to={`/products/destroy/${this.props.match.params.id}`}><button className="delete" onClick={()=> this.deleteProduct()}>Eliminar producto</button></Link>
          <Link to={"/products/create"}><button className="create">Nuevo producto</button></Link>
        </div>

        <div className="ProductDescription-Card" key={this.state._id}>
          <h4 className="description-title">{this.state.name}</h4>

          <div className="container-img">
            <img
              className="img"
              src={this.state.picture}
              alt={this.state.picture}
            />
          </div>

          <p className="paragraph-description">{this.state.description}</p>

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
export default ProductDescription;
