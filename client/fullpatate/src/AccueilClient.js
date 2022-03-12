import React, {useState, useEffect} from "react";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
//import NavbarClassic from "./components/NavbarClassic";
import NavbarClient from "./components/NavbarClient";
//import { getUsersAuthent } from "../../../server/src/controllers/authent.controller";

const AccueilClient =()=>{

    const [name, setName] = useState('');
    const [token, setToken] =useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState('');
    const navigate = useNavigate();

    useEffect( ()=>{
        refreshToken();
        getUsersAuthent();
    },[]);

    const refreshToken = async()=>{
        try{
            const response = await axios.get('http://localhost:3001/api/v1/authent/token');
            setToken(response.data.accessToken);
            const decode = jwt_decode(response.data.accessToken);
            setName(decode.name);
            setExpire(decode.exp);
        }catch(error){
            if (error.response){
                navigate('/accueil-client');
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config)=>{
        const currentDate = new Date();
        if(expire*1000 < currentDate.getTime()){
            const response = await axios.get('http://localhost:3001/api/v1/authent/token');
            setToken(response.data.accessToken);
            const decode = jwt_decode(response.data.accessToken);
            setExpire(decode.exp);
        }

        return config;
    },(error) =>{
        return Promise.reject(error);

    });

    const getUsersAuthent = async () =>{
        const response = await axiosJWT.get('http://localhost:3001/api/v1/authent/authentication', {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        setUsers(response.data);
    }


    return (
        <div className="accueil-client">
            <NavbarClient />
            <h2>Bienvenue !</h2>
 
  
        </div>
    )
}

export default AccueilClient;