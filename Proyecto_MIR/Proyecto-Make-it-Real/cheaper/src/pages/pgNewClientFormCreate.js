import React from 'react';
import '../App.css';
import FormClient from "../components/formClient.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';

function NewClient() {
  return (
    <div className="pgNewClientFormCreate">
      <FormClient />
    </div>
  );
}
export default NewClient;
