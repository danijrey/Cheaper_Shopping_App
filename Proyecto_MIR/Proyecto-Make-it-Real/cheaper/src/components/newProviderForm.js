import React from "react";
import logo from "../assets/logo.png";
import "./newProviderForm.css";

function ProviderForm({
	name,
	lastname,
	correo,
	company,
	branchName,
	branchAdress,
	username,
	password,
	passwordTwo,
	handleChange,
	handleSubmit,
}) {
	return (
		<div clasName="App">
			<div className="FormContainer">
				<img src={logo} className="NavBar-Logo-Provider"></img>
				<div className="PaginaNew-Provider">
					<h1 className="TitleProvider">Ingresa tus datos</h1>
					<div className="InputsNew-Provider">
						<form className="ProviderForm">
							<input
								className="Name-Provider"
								type="text"
								name="name"
								id="name"
								placeholder="Nombre"
								onChange={handleChange}
								value={name}
							/>
							<input
								className="Lastname-Provider"
								type="text"
								name="lastname"
								id="lastname"
								placeholder="Apellidos"
								onChange={handleChange}
								value={lastname}
							/>
							<input
								className="Empresa-Provider"
								type="text"
								name="company"
								id="company"
								placeholder="Empresa"
								onChange={handleChange}
								value={company}
							/>
							<input
								className="Nit-Provider"
								type="number"
								name="branchName"
								id="branchName"
								placeholder="Nit"
								onChange={handleChange}
								value={branchName}
							/>
							<input
								className="Correo"
								type="text"
								name="correo"
								placeholder="Correo"
							/>

							<input
								className="Password-Provider"
								type="password"
								name="password"
								id="password"
								placeholder="Contraseña"
								onChange={handleChange}
								value={password}
							/>
							<button className="SubmitProvider" type="Submit">
								Enviar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProviderForm;
