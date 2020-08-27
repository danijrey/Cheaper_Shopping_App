import React from "react";
import "./Home.css";
import Slider from "../components/slider";
import ProductListHomeClient from "../components/productListHomeClient.js";
import NavBarClient from './NavBarClient.js'


class HomeClient extends React.Component {



  render() {

    return (
      <div className="Home">
        <NavBarClient />
        <Slider />
        <ProductListHomeClient />
      </div>
    );
  }
}

export default HomeClient;