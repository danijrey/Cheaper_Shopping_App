import React from "react";
import "../components/clientForm.css";
import axios from "axios";
import ClientForm from "../components/clientForm.js";

class ClientFormCreate extends React.Component {
  state = {
    name: "",
    lastname: "",
    clientEmail: "",
    password: "",
    clients: [],
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { ...data } = this.state;
    axios({
      method: "POST",
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: "/clients/create",
      data,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(({ data }) => {
      localStorage.setItem("token", data.token);
      this.props.history.push("/home");
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { ...data } = this.state;

    axios({
      method: "POST",
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: "/clients/create",
      data,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(({ data }) => {
      localStorage.setItem("token", data.token);
      this.props.history.push("/clients");
    });
  };

  render() {
    return (
      <ClientForm
        name={this.state.name}
        lastname={this.state.lastname}
        clientEmail={this.state.clientEmail}
        password={this.state.password}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default ClientFormCreate;
