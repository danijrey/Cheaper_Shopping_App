import React from 'react';
import './createBranch.css';
import {Link} from "react-router-dom"

class CreateBranch extends React.Component {

    render() {
      return (
        <span className ="span-createBranch">
          <Link to="/providers/:id/branch/create" className ="btn-createBranch" data-testid="NewBranchLink">Crear Sucursal</Link>
        </span>
        )
      }
  }

export default CreateBranch;
