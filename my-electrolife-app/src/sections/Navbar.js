import React from 'react'
import { NavLink } from 'react-router-dom'
import HomePic from '../img/Logo-removebg-preview.png';
import CartPic from '../img/Cart-removebg-preview.png';
import Menu from '../img/MenuSama-removebg-preview.png';

const Navbar=()=>{
    return(
        <nav className="nav-wrapper red darken-2">
            <div>
                <div className="container">
                    <a className="brand-logo"><NavLink to="/"><img src={HomePic} width="50" height="30" class="center"></img>ElectroLife</NavLink></a>
                    <ul className="right">
                        <li><NavLink to="/cart"><img src={CartPic} width="50" height="50" class="center"></img></NavLink></li>
                    </ul>
                    <ul className="left">
                        <li>{/* <NavLink to="/cart"> */}
                        <img src={Menu} width="50" height="30" href="#hairdressers1" class="btn btn-primary btn-block red" data-toggle="collapse"></img>
                        {/* </NavLink> */}
                        </li>
                            <div id="hairdressers1" class="collapse">
                                <div class="card bg-danger">
                                    <li><NavLink to="/about">About</NavLink></li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                </div>
					        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar