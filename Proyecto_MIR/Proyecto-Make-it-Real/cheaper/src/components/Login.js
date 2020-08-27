import React from "react";
import logo from "../assets/logo.png";
import "./Login.css";
// import {Link} from "react-router-dom";

function Login({
	email,
	password,
	handleChange,
	handleSubmit,
}) {
	return (
		<div className="AppLog">
			<div className="Login">
				<img src={logo} className="NavBar-Logo-Login" alt="Logo"></img>

				<div className="Pagina-Login">
					
					<h1 className="Bienvenido"> Bienvenido a Cheaper </h1>
					<p className="Frase">Encuentra las opciones más económicas </p>
					<div className="Botones-Login">

						<form onSubmit={handleSubmit}>
							<input className="Input-Correo"
							type="text"
							name="email"
							placeholder=" Correo"
							onChange={handleChange}
							value={email}></input>

							<input className="Input-Password"
							type="password"
							name="password"
							placeholder=" Contraseña"
							onChange={handleChange}
							value={password}></input>

							<button className="SubmitButton" type="submit">Iniciar Sesión</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);

}


 export default Login;
