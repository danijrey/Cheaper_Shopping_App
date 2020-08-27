import React, { useState, useEffect } from 'react';
import "./productListHome.css";
import axios from "axios";
import {Link} from "react-router-dom"

function ProductListHomeClient({ history }) {

let [products, setProducts] = useState([]);


useEffect(() => {
	const token = localStorage.getItem('token');
	axios({
		method: 'GET',
		baseURL: process.env.REACT_APP_SERVER_URL,
		url: '/products/all',
		headers: {
			'Authorization': token
		}
	})
		.then(response  => {
			setProducts(response.data)
		})
		.catch(error => {
			localStorage.removeItem('token');
			// history.push('/');
		})

}, [history]);

	return (
		<div className="App">

			<div className="gridContainer" data-testid="ListHomeClient">
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
								<Link to={`/clients/products/show/${data._id}`} className="VerMas" >Ver más</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ProductListHomeClient;
//{`/products/show/${data._id}`}
