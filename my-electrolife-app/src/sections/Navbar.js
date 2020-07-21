import React from 'react'
import { NavLink } from 'react-router-dom'
import HomePic from '../img/Logo-removebg-preview.png';
import CartPic from '../img/Cart-removebg-preview.png';
import Menu from '../img/MenuSama-removebg-preview.png';

const Navbar=()=>{
    return(
        <nav className="nav-wrapper blue darken-2">
            <div className="container">
                <ul className="left">
                    <li><NavLink to="/cart"><img src={Menu} width="50" height="30" class="center"></img></NavLink></li>
                </ul>
                <a className="brand-logo"><NavLink to="/"><img src={HomePic} width="50" height="30" class="center"></img>ElectroLife</NavLink></a>
                <ul className="right">
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/cart"><img src={CartPic} width="50" height="50" class="center"></img></NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar