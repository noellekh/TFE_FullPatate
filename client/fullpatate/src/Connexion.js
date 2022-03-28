import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavbarClassic from './components/NavbarClassic';
import AccueilClassic from './AccueilClient';

const Login = ()=>{
    const [user_email, setEmail]=useState('');
    const [user_password, setPassword]= useState('');
    const [msg, setMsg]= useState('');
    const navigate = useNavigate();

    const Auth = async(e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:3001/api/v1/authent/login',{
                user_email: user_email, 
                user_password:user_password
            });
            navigate("/accueil-client")
            alert("Connexion ok");
        }catch(error){
            console.log("ERROR PAGE CONNEXION ",error);
            navigate('/accueil-classic');

        }
    }

    return(
        <section className='section-connexion'>
            <NavbarClassic />
            
            <div className='body-connexion'>
                <div className='container-connexion'>
                    <form onSubmit={Auth} className="form-connexion">
                        <div className='field-connexion'>
                            <label className='label'>Email</label>
                            <input type='text' className='input' placeholder='mail'
                                value={user_email} 
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='field-connexion'>
                            <label className='label'>Mot de passe</label>
                            <input type='password' className='input' placeholder='mot de passe'
                                value={user_password} 
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className='field-connexion'>
                            <button className='button-connexion' onClick={Auth}>Se connecter</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Login;