import React from "react";
import "./Home.css";
import Slider from "../components/slider";
import ProductListHome from "../components/productListHome.js";
import CreateProduct from "../components/createProduct.js";
import CreateBranch from "../components/createBranch.js";
import NavBar from './NavBar.js'


class Home extends React.Component {

  render() {

    return (
      <div className="Home">

        <NavBar />
        <CreateProduct />
        <CreateBranch />
        <Slider />
        <ProductListHome />

      </div>
    );
  }
}

export default Home;