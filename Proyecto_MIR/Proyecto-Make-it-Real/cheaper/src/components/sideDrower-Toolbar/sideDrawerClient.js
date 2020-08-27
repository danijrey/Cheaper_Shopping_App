import React from 'react';
import logo from '../../assets/logo.png';
import './SideDrawer.css';
import { useHistory } from "react-router-dom";


const SideDrawerClient = props => {
    let history = useHistory();
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    function handleClick() {
        localStorage.clear();
        history.push('/');
    }
    
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/home">Mi perfil</a></li>
                <li><a href="/home">Mis lista de mercado</a></li>
                <li><a href="/home">Inicio</a></li>
                <li><a href="/home">Configuracion</a></li>
                <li className='btn_logout' onClick={handleClick}>Salir</li>
                <img src={logo} className="side-drawer-logo" alt="Logo"></img>
            </ul>
        </nav>
    )
};

export default SideDrawerClient;
