import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PicTitle from '../img/Logo-removebg-preview.png';
import PicCart from '../img/Cart-removebg-preview.png';

const Titlebar=()=>{
    return(
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a className="brand-logo"><NavLink to="/">ElectroLife</NavLink></a>
                <ul className="right">
                    <li><NavLink to="/"><img src={PicCart} width="100" height="100" class="center"></img></NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Titlebar