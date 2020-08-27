import React from "react";
import "../components/branchForm.css";
import axios from "axios";
import BranchForm from "../components/branchForm.js";

class BranchFormCreate extends React.Component {
	state = {
		branchName: "",
		branchAdress: "",
		branchs: [],
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
			url: "/providers/:id/branch/create",
			data,
			headers: {
				"Content-Type": "application/json",
			},
		}).then(({data}) => {
			localStorage.setItem("token", data.token)
			this.props.history.push("/providers")
		});
	}

	render() {
		return (
			<BranchForm
				branchName={this.state.name}
				branchAdress={this.state.lastname}
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
			/>
		);
	}
}

export default BranchFormCreate;
