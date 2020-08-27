import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideDrawerClient from './sideDrower-Toolbar/sideDrawerClient.js'
import Backdrop from './sideDrower-Toolbar/Backdrop.js'
import Toolbar from './sideDrower-Toolbar/toolbarClient.js'
import { Link } from "react-router-dom"
import {
	faSearch,
	faCamera,
	faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";




class NavBar extends React.Component{

	state = {
		name:"",
		sideDrawerOpen: false,
		};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {

		e.preventDefault();
		const { sideDrawerOpen, ...data}  = this.state; //Excluimos sideDrawerOpen
		console.log(data)
		


/* 		axios({
			method: "POST",
			baseURL: process.env.REACT_APP_SERVER_URL,
			url: '/clients/search/filter',
			data,
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			this.setState(response.data)
			localStorage.setItem("products", JSON.stringify(response))
			window.location ="/clients/search/filter"
		/* 	console.log(response.data)
			
		}); 
		
			his.state.name[0].toUpperCase() +
			this.state.name.slice(1); */

	}

	drawerToggleClickHandler = () => {
			this.setState((prevState) => {
					return { sideDrawerOpen: !prevState.sideDrawerOpen };
			});
	};

	backdropClickHandler = () => {
			this.setState({ sideDrawerOpen: false })
	};
	render() {
			let backdrop;

			if (this.state.sideDrawerOpen) {
					backdrop = <Backdrop click={this.backdropClickHandler} />
			}



	return (
		<div className="Home">

		<Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
		<SideDrawerClient show={this.state.sideDrawerOpen} />
		{backdrop}


			<div className="NavBusqueda-Home">

				<form onSubmit={this.handleSubmit}>

					<input className="NavBusqueda-Busqueda"
					type="text"
					placeholder=" Realizar una busqueda."
					name="name"
					onChange={this.handleChange}
					value={this.state.name}
					/>
					<Link to={`/clients/search/${this.state.name}`} >
						<FontAwesomeIcon icon={faSearch} className="NavBusqueda-Icon" />
					</Link>
				</form>

				
			</div>

			<div className="Ubicacion">

				<form onSubmit={this.handleSubmit}>

					<input className="Ubicacion-Busqueda"
						type="text"
						name="ubicacion"
						placeholder=" Ubicación."
/* 						onChange={this.handleChange}
						value={this.state.name} */
						/>

					<Link icon={faSearch} to={`/clients/search/${this.state.name}`} >
						<FontAwesomeIcon icon={faMapMarkerAlt} className="Ubicacion-Icon" />
					</Link>
				</form>

      </div>

    </div>
	);
}
}

export default NavBar;
//'Accept': 'application/json',
//{`/clients/products/show/${data._id}`}