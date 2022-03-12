import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavbarClassic from './components/NavbarClassic';
import AccueilClassic from './AccueilClient';

const Login = ()=>{
    const [email, setEmail]=useState('');
    const [password, setPassword]= useState('');
    const [msg, setMsg]= useState('');
    const navigate = useNavigate();

    const Auth = async(e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:3001/api/v1/authent/login',{
                email: email, 
                password:password
            });
            navigate("/accueil-client")
        }catch(error){
            if(error.response){
                setMsg(error.response.data.msg)
            }
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
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='field-connexion'>
                            <label className='label'>Mot de passe</label>
                            <input type='password' className='input' placeholder='mot de passe'
                                value={password} 
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