import React, {useState, useEffect} from "react";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
//import NavbarClassic from "./components/NavbarClassic";
import NavbarClient from "./components/NavbarClient";
//import { getUsersAuthent } from "../../../server/src/controllers/authent.controller";

const AccueilClient =()=>{

    const [user_nom, setName] = useState('');
    const [refresh_token, setToken] =useState('');
    const [expire, setExpire] = useState('');
    const [authent, setAuthent] = useState([]);
    const navigate = useNavigate();

    console.log("TOKEN: ", refresh_token);
    console.log("NAME: ", user_nom);
    

    useEffect( ()=>{
        refreshToken();
        getUsersAuthent();
    });

    const refreshToken =  function (){
        try{
            const response =  axios.get('http://localhost:3001/api/v1/authent/token',  {headers:{withCredentials: true}});
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.user_nom);
            setExpire(decoded.expire);
            console.log("DECODE");

        }catch(error){
            if (error.response){
                console.log("ERROR REFRESH ACC", error);
                //console.log("SetTOKEN: ");
                navigate('/accueil-classic');
            }
        }
    }

    const axiosJWT = axios.create(
        {
            headers: { "Content-Type": "application/*" },
        
        });

    axiosJWT.interceptors.request.use( (config)=>{
        const currentDate = new Date();
        if(expire*1000 < currentDate.getTime()){
            const response =  axios.get('http://localhost:3001/api/v1/authent/token', {withCredentials: true});
            config.headers.Authorization= `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decode = jwt_decode(response.data.accessToken);
            setName(decode.user_nom);
            setExpire(decode.exp);
            
        }

        return config;
    },(error) =>{
        console.log('erreur',error)
        return  Promise.reject(error);


    });

    const getUsersAuthent =  function () {
        try{

            const response =  axiosJWT.get('http://localhost:3001/api/v1/authent/register', {
                headers:{
                    Authorization: `Bearer ${refresh_token}`
                }
            });
            setAuthent(response.data);
            console.log('yeees');

        }
        catch(error){
            console.log("ERROR ACCUEIL", error)
            
        }

        
    }

    return (
        <div className="accueil-client">
            <NavbarClient />
            <div className="acceuil-nom">

            
                <h2>Bienvenue !</h2>
            

            </div>

            
            
                

            
  
        </div>
    )
}

export default AccueilClient;