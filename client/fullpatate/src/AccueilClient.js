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
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    console.log("TOKEN: ", token);
    

    useEffect( ()=>{
        refreshToken();
        getUsersAuthent();
    }, []);

    const refreshToken = async function (){
        try{
            const response = await axios.get('http://localhost:3001/api/v1/authent/token');
            setToken(response.data.accessToken);
            const decode = jwt_decode(response.data.accessToken);
            setName(decode.name);
            setExpire(decode.exp);
            console.log("DECODE", decode);

        }catch(error){
            if (error.response){
                console.log("ERROR REFRESH ACC", error);
                //console.log("SetTOKEN: ");
                navigate('/');
            }
        }
    }

    const axiosJWT = axios.create(
        {
            headers: { "Content-Type": "application/json" },
        
        });

    axiosJWT.interceptors.request.use(async (config)=>{
        const currentDate = new Date();
        if(expire*1000 < currentDate.getTime()){
            const response = await axios.get('http://localhost:3001/api/v1/authent/token');
            config.headers.Authorization= `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decode = jwt_decode(response.data.accessToken);
            setName(decode.name);
            setExpire(decode.exp);
            console.log("erreur ici !!!!")
        }

        return config;
    },(error) =>{
        console.log('erreur',error)
        return  Promise.reject(error);


    });

    const getUsersAuthent = async function () {
        try{

            const response = await axiosJWT.get('http://localhost:3001/api/v1/authent/authentication', {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            setUsers(response.data);

        }
        catch(error){
            console.log("ERROR ACCUEIL", error)
            console.log("response data: ");
        }

        
    }


    return (
        <div className="accueil-client">
            <NavbarClient />
            {users.map((user)=>{
                return(
                    <h1>hello {user.usesr_name}</h1>
                )
                
            })}
            <h2>Bienvenue : {name}!</h2>
            
 
  
        </div>
    )
}

export default AccueilClient;