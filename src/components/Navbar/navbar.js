import React from "react";
import './navbar.css';
import logo from '../../ressources/letter-m_.png'
import contactImg from '../../ressources/contact_.png'
import { Link } from 'react-scroll'

const Navbar = ()=>{
    return(
        <nav className="navbar">
            <img src={logo} alt="" className="logo"/>
            <div className="desktopMenu">
            <Link className="desktopmenuListItem">Home</Link>
            <Link className="desktopmenuListItem">About</Link>
            <Link className="desktopmenuListItem">Portfolio</Link>
            <Link className="desktopmenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} className="desktopMenuImg"/>Contact me</button>

        </nav>
    )
}
export default Navbar