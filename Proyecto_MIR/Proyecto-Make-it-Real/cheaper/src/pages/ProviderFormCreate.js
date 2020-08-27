import React from "react";
import "../components/ProviderForm.css";
import axios from "axios";
import ProviderForm from "../components/ProviderForm.js";

class ProviderFormCreate extends React.Component {
	state = {
		name: "",
		lastname: "",
		providerEmail: "",
		nit: 0,
		company: "",
		password: "",
		providers: [],
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
			url: "/providers/create",
			data,
			headers: {
				"Content-Type": "application/json",
			},
		}).then(({data}) => {
			localStorage.setItem("token", data.token)
			this.props.history.push("/home")
		});
	}

	render() {
		return (
			<ProviderForm
				name={this.state.name}
				lastname={this.state.lastname}
				providerEmail={this.state.providerEmail}
				nit={this.state.nit}
				company={this.state.company}
				password={this.state.password}
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
			/>
		);
	}
}

export default ProviderFormCreate;
