import React, { useState, useEffect } from "react";
import ToolbarClient from "../sideDrower-Toolbar/toolbarClient";
import "./functionCarClient.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

function FunctionCarClient({ history }) {
 let [lists, setLists] = useState([]);

  const cartList = JSON.parse(localStorage.getItem("list"));

  let total = 0;
  cartList.forEach((item) => {
    total = total + item.price * item.cant;
  });

 

  function handlePayment (){
    const handler =  window.ePayco.checkout.configure({
     key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
     test: true
   });

   handler.open({
     external: 'false',
     tax: '0',
     tax_base:'0',
     name: 'Total de compra',
     description: 'Total',
     currency: 'cop',
     country:'Colombia',
     lang: 'en',
     invoice: '12345678',
     methodsDisable:['PSE','DP', 'SP', 'CASH'],
     address_billing: '',
     type_doc_billing:'cc',
     name_billing: 'Tu nombre',
     num_doc_billing: '',
     mobilephone_billing: '',
     amount: total
   })
}
  return (
    <div>
      <ToolbarClient />
       <ul className="ulListProduct">
        {cartList.map((item) => (
          <li className="productListCar">
            <div className="card-productCar">
              <img
                src={item.picture}
                className="img-Products"
                alt={item.picture}
              />{" "}
              <h5 className="nameProductCar">
                {item.name} X {item.cant}
              </h5>
              <h5 className="total">Total</h5>
              <h5 className="priceProductCar">{item.cant * item.price}</h5>
            </div>
          </li>
        ))}
      </ul>
      <div className="shopppingTotal">
        <h4 className="shoppingTotalText">Total Compra</h4>
        <h4 className="shoppingValue">{total}</h4>
      </div>
      <button className="buy" onClick={handlePayment}>Comprar</button>
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

// useEffect(() => {
//   axios({
//     method: "GET",
//     baseURL: process.env.REACT_APP_SERVER_URL,
//     url: "/clients/functionCar",
//   });
//});

export default FunctionCarClient;
