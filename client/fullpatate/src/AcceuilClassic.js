import React, {useState, useEffect} from "react";
import axios from 'axios';
//import jwt_decode from 'jwt-decode';
//import { useNavigate } from "react-router-dom";
import NavbarClassic from "./components/NavbarClassic";
//import NavbarClient from "./components/NavbarClient";

const AccueilClassic=()=>{

    return(
        <div className="acceuil-classic">
            <NavbarClassic />
            <h2>Accueil Classic</h2>
        </div>
    )
}

export default AccueilClassic;