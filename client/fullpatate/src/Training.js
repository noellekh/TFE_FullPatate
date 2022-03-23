import React, {useState, useEffect} from "react";
import NavbarClient from "./components/NavbarClient";
import imgsquat from "./img/air-squat.jpg";
import crunch from "./img/crunch.jpg";
import planche from "./img/plank.jpg";
import "./css/Training.css";


const Training =()=>{

    return(
        <div className="training">
            <NavbarClient/>
            <div className="training-container">
            <h1>Exercices</h1>

            <div className="exercice">
                <div className="exo-name">
                    <h2>Squat</h2>
                    <img classNmae="exo-img" src={imgsquat} alt="img"/>
                    <p>Monter et descendre en gadant le dos bien droit </p>
                    <form className="exo-form">
                        <input type="text" className="exo-input" placeholder="Nbr de répétition en 30s"/>
                        <button className="exo-button">Ajouter score</button>
                    </form>

                </div>

                <div className="exo-name">
                    <h2>Abdo</h2>
                    <img classNmae="exo-img" src={crunch} alt="img"/>
                    <p>Monter et descendre en gadant le dos bien droit </p>
                    <form className="exo-form">
                        <input type="text" className="exo-input" placeholder="Nbr de répétition en 30s"/>
                        <button className="exo-button">Ajouter score</button>
                    </form>
                </div>

                <div className="exo-name">
                    <h2>planche</h2>
                    <img classNmae="exo-img" src={planche} alt="img"/>
                    <p>Monter et descendre en gadant le dos bien droit </p>
                    <form className="exo-form">
                        <input type="text" className="exo-input" placeholder="Nbr de répétition en 30s"/>
                        <button className="exo-button">Ajouter score</button>
                    </form>
                </div>

                <div className="exo-name">
                    <h2>planche</h2>
                    <img classNmae="exo-img" src={planche} alt="img"/>
                    <p>Monter et descendre en gadant le dos bien droit </p>
                    <form className="exo-form">
                        <input type="text" className="exo-input" placeholder="Nbr de répétition en 30s"/>
                        <button className="exo-button">Ajouter score</button>
                    </form>
                </div>


            </div>
            </div>


        </div>
    )


}

export default Training;
