import React from "react";
import './skills.css';
import htmlImg from '../../ressources/html5-wordmark_.png'
import cssImg from '../../ressources/css3-wordmark_.png'
import jsImg from '../../ressources/javascript_.png'

const Skills = () =>{
    return(
        <section id="skills">
            <span className="skillTitle"> Qu'est ce que je fais</span>
            <span className="skillDesc"> Je suis développeur fullstack passionné, je possède une expertise approfondie dans plusieurs langages de programmation essentiels, notamment JavaScript, HTML et CSS. Ma capacité à créer des interfaces utilisateur interactives et esthétiques est soutenue par ma maîtrise de ces langages fondamentaux.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={jsImg} alt="javascript" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>JavaScript</h2>
                        <p>JavaScript, est un langage de programmation polyvalent, interprété côté client, principalement utilisé pour rendre les pages web interactives.  </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={htmlImg} alt="html" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>html5</h2>
                        <p>HTML,  est le langage de balisage standard utilisé pour créer et structurer le contenu des pages web.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={cssImg} alt="css" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>css3</h2>
                        <p>CSS, acronyme de Cascading Style Sheets, est un langage de feuilles de style utilisé pour décrire la présentation visuelle des documents HTML ou XML.</p>
                    </div>
                </div>
                    
            </div>
        </section>
    )
};

export default Skills