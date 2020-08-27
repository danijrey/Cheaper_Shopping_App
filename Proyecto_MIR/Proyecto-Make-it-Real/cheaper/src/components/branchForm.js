import React from 'react';
import logo from '../assets/logo.png';
import "./clientForm.css";

function BranchForm({
	branchName,
	branchAdress,
	handleChange,
	handleSubmit,
}) {
	return (
		<div className="App-Branch">
			<div className="FormContainer">
				<img src={logo} className="NavBar-Logo-Branch" alt="Logo"></img>
				<div className="PaginaNew-Branch">
					<h1 className="TitleForm">Ingresa los datos de la sucursal</h1>
					<div className="InputsNew-Branch">

						<form className="BranchForm" onSubmit={handleSubmit} data-testid="BranchForm">
							<input className="Branch-Name"
								type="text"
								name="branchName"
								placeholder=" Nombre de sucursal"
								onChange={handleChange}
								value={branchName}
							/>
							<input className="Branch-Adress"
								type="text"
								name="branchAdress"
								placeholder=" Dirección sucursal"
								onChange={handleChange}
								value={branchAdress}
						  	/>
							<button className="SubmitBranch" type="submit">Enviar</button>
						</form>
					</div>
				</div>
			</div>
		</div>
  );
}

export default BranchForm;
