import React from "react";
import './intro.css';
import bg from '../../ressources/moi.png'
import { Link } from 'react-scroll'
import btnImg from '../../ressources/been-here_.png'



const Intro = () =>{
    return(
        <section id="intro">
            <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">je suis <span className="introName">Manassé</span><br/>Developpeur Fullstack</span>
            <p className="introPara">:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::</p>
            <Link><button className="btn"><img src={btnImg} alt="hire me" className="btnImg"/>Engagez moi </button></Link>
            </div>
            <img src={bg} alt="profil" className="bg"/>
        </section>
    )
};

export default Intro