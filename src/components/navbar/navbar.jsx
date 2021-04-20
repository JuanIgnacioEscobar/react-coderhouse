/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import './navbar.css'
import logo from './logo_zapa.png'
import CartWidget from './CartWidget'
// los parentesis sirven cuando el componente no requiere funciones o variables
const NavBar = () => ( //Las variables/funciones van antes del return
        <Fragment>
                <nav className='navbar'>
                        <img src={logo} alt="" className='logo'/>
                        <ul className='menu'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Marcas</a></li>
                                <li><a href="#">Sobre nosotros</a></li>
                                <li><a href="#">Contacto</a></li>
                                <li><a href="#">Carrito</a></li>
                                <li><a href="#"><CartWidget /></a></li>
                        </ul>
                </nav>
        </Fragment>
);

export default NavBar;