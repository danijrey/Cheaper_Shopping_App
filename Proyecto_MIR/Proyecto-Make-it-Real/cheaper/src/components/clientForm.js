import React from "react";
import logo from "../assets/logo.png";
import "./clientForm.css";

function ClientForm({
	name,
	lastname,
	clientEmail,
	password,
	handleChange,
	handleSubmit,
}) {
	return (
		<div className="App">
			<div className="FormContainer">
				<img src={logo} className="NavBar-Logo-Client" alt="Logo"></img>
				<div className="PaginaNew-Client">
					<h1 className="TitleForm">Ingresa tus datos</h1>
					<div className="InputsNew-Client">

						<form className="ClientForm" onSubmit={handleSubmit} data-testid="ClientForm">
							<input className="Name"
								type="text"
								name="name"
								placeholder=" Nombre"
								onChange={handleChange}
								value={name}
							/>
							<input
								className="LastName"
								type="text"
								name="lastname"
								placeholder=" Apellidos"
								onChange={handleChange}
								value={lastname}
							/>
							<input
								className="Correo"
								type="email"
								name="clientEmail"
								placeholder=" Correo"
								onChange={handleChange}
								value={clientEmail}
							/>
							<input
								className="Password"
								type="password"
								name="password"
								placeholder="Contraseña"
								onChange={handleChange}
								value={password}
							/>
							<button className="SubmitClient" type="submit">
								Enviar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ClientForm;
