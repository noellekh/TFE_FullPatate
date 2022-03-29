import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import NavbarClassic  from "./components/NavbarClassic";
import Connexion from "./Connexion";

const Register = ()=>{
    const [user_nom, setName] = useState('');
    const[user_password, setPassword] = useState('');
    const [user_surname, setSurname] =useState('');
    const [user_birth, setBirth]= useState('');
    const [user_email, setEmail]= useState('');
    const [user_phone, SetPhone]= useState('');
    const [user_sex, setSex]= useState('');
    const [user_street, setStreet] = useState('');
    const [postal, setPostal] = useState('');
    const [newsletter, setNewsletter] = useState('');

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async (e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:3001/api/v1/authent/register', {
                user_nom: user_nom,
                user_password: user_password,
                user_surname: user_surname,
                user_birth: user_birth,
                user_email:user_email,
                user_phone:user_phone,
                user_sex:user_sex,
                user_street:user_street,
                postal:postal,
                newsletter:newsletter


            });
            navigate("/connexion")
            alert("Bienvenue !")
        }catch(error){
            if (error.response){
                setMsg(error.response.data.msg)
                
            }
        }
    }
    
    return (
        <section className="section-inscription">
            <NavbarClassic />

            <div className="body-inscription">
                <div className="container-inscription">
                    <form onSubmit={Register} className="form-inscription">
                        <p>{msg}</p>

                        <div className="field-inscription">
                            <label className="label">Nom</label>
                            <input type="text" className="input" placeholder="Nom" 
                                value={user_nom}
                                onChange={(e)=> setName(e.target.value)}
                            />    
                        </div>

                        <div className="field-inscription">
                            <label className="label">Prénom</label>
                            <input type="text" className="input" placeholder="Prénom" 
                                value={user_surname}
                                onChange={(e)=> setSurname(e.target.value)}
                            />    
                        </div>

                        <div className="field-inscription">
                            <label className="label">Email</label>
                            <input type="text" className="input" placeholder="Email" 
                                value={user_email}
                                onChange={(e)=> setEmail(e.target.value)}
                            />    
                        </div>

                        <div className="field-inscription">
                            <label className="label">Mot de passe</label>
                            <input type="password" className="input" placeholder="mot de passe" 
                                value={user_password}
                                onChange={(e)=> setPassword(e.target.value)}
                            />    
                        </div>


                        <div className="field-inscription">
                            <label className="label">Date de naissance</label>
                            <input type="text" className="input" placeholder="date" 
                                value={user_birth}
                                onChange={(e)=> setBirth(e.target.value)}
                            />    
                        </div>

                        <div className="field-inscription">
                            <label className="label">Genre</label>
                            <input type="text" className="input" placeholder="F=femme, M=homme" 
                                value={user_sex}
                                onChange={(e)=> setSex(e.target.value)}
                            />    
                        </div>

                        <div className="field-inscription">
                            <label className="label">Téléphone</label>
                            <input type="text" className="input" placeholder="telephone" 
                                value={user_phone}
                                onChange={(e)=> SetPhone(e.target.value)}
                            />    
                        </div>

                        <div className="field-inscription">
                            <label className="label">Adresse</label>
                            <input type="text" className="input" placeholder="Rue et n°" 
                                value={user_street}
                                onChange={(e)=> setStreet(e.target.value)}
                            />    
                        </div>

                        <div className="field-inscription">
                            <label className="label">Code postal</label>
                            <input type="text" className="input" placeholder="Code postal" 
                                value={postal}
                                onChange={(e)=> setPostal(e.target.value)}
                            />    
                        </div>

                        <div className="field-inscription">
                            <label className="label">Newsletter</label>
                            <input type="text" className="input" placeholder="1=oui 0 =non" 
                                value={newsletter}
                                onChange={(e)=> setNewsletter(e.target.value)}
                            />    
                        </div>

                        <div className="field-inscription">
                            <button className="button-inscription" onClick={Register}>Inscription</button>
                        </div>
                    </form>
                </div>
                
            </div>
            
        </section>
    
    )

}

export default Register;



