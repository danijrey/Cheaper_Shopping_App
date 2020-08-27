import React from "react";
import logo from "../assets/logo.png";
import "./ProviderForm.css";

function ProviderForm({
  name,
  lastname,
  company,
  nit,
  providerEmail,
  password,
  handleChange,
  handleSubmit,
}) {
  return (
    <div className="App">
      <div className="FormContainer">
        <img
          src={logo}
          className="NavBar-Logo-ProvidersCreate"
          alt="Logo"
        ></img>
        <div className="PaginaNew-Provider">
          <h1 className="TitleProvider">Ingresa tus datos</h1>
          <div className="InputsNew-Provider">
            <form
              className="ProviderForm"
              onSubmit={handleSubmit}
              data-testid="ProviderForm"
            >
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
                name="nit"
                id="nit"
                placeholder="Nit"
                onChange={handleChange}
                value={nit}
              />
              <input
                className="Correo"
                type="email"
                name="providerEmail"
                id="providerEmail"
                placeholder="Correo"
                onChange={handleChange}
                value={providerEmail}
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
              <button className="SubmitProvider" type="submit">
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
