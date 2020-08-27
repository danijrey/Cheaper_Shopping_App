import React from 'react';
import axios from 'axios';
import ClientForm from '../components/formClient.js';

class NewClientFormCreate extends React.Component {

  state = {
    name: '',
    lastname: '',
    clientEmail: '',
    doc: 0,
    docType: '',
    username: '',
    password: '',
    passwordTwo: '',
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { ...data } = this.state;

    axios({
      method: 'POST',
      baseURL: 'http://localhost:3000',
      url: '/',
      data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => this.props.history.push('/'))
  }
  render() {
    return (
      <clientForm
        name={this.state.name}
        lastname={this.state.lastname}
        clientEmail={this.state.clientEmail}
        doc={this.state.doc}
        docType={this.state.docType}
        username={this.state.username}
        password={this.state.password}
        passwordTwo={this.state.passwordTwo}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default NewClientFormCreate;
