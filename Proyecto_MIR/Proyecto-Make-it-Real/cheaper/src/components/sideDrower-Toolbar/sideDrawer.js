import React from 'react';
import { useHistory } from "react-router-dom";
import logo from '../../assets/logo.png';
import './SideDrawer.css';


const SideDrawer = props => {
    let history = useHistory();
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    function handleClick(e) {
        localStorage.clear();
        history.push('/');
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Mi perfil</a></li>
                <li><a href="/products/all">Mis productos</a></li>
                <li><a href="/home">Inicio</a></li>
                <li><a href="/">Configuracion</a></li>
                <li><a href="/providers/:id/branch/create">Crear sucursal</a></li>
                <li className='btn_logout' onClick={handleClick}>Salir</li>
                <img src={logo} className="side-drawer-logo" alt="Logo"></img>
            </ul>
        </nav>
    )
};

export default SideDrawer;
