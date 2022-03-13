import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import NavbarClassic  from "./components/NavbarClassic";

const Register = ()=>{
    const [name, setName] = useState('');
    const[password, setPassword] = useState('');
    const [surname, setSurname] =useState('');
    const [birth, setBirth]= useState('');
    const [email, setEmail]= useState('');
    const [phone, SetPhone]= useState('');
    const [sex, setSex]= useState('');
    const [street, setStreet] = useState('');
    const [postal, setPostal] = useState('');
    const [newsletter, setNewsletter] = useState('');

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async (e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:3001/api/v1/authent/register', {
                name: name,
                password: password,
                surname: surname,
                birth: birth,
                email:email,
                phone:phone,
                sex:sex,
                street:street,
                postal:postal,
                newsletter:newsletter


            });
            navigate('/accueil-client');
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
                                value={name}
                                onChange={(e)=> setName(e.target.value)}
                            />    
                        </div>

                        <div className="field-inscription">
                            <label className="label">Prénom</label>
                            <input type="text" className="input" placeholder="Prénom" 
                                value={surname}
                                onChange={(e)=> setSurname(e.target.value)}
                            />    
                        </div>

                        <div className="field-inscription">
                            <label className="label">Email</label>
                            <input type="text" className="input" placeholder="Email" 
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                            />    
                        </div>

                        <div className="field-inscription">
                            <label className="label">Mot de passe</label>
                            <input type="password" className="input" placeholder="mot de passe" 
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                            />    
                        </div>


                        <div className="field-inscription">
                            <label className="label">Date de naissance</label>
                            <input type="text" className="input" placeholder="date" 
                                value={birth}
                                onChange={(e)=> setBirth(e.target.value)}
                            />    
                        </div>

                        <div className="field-inscription">
                            <label className="label">Genre</label>
                            <input type="text" className="input" placeholder="F=femme, M=homme" 
                                value={sex}
                                onChange={(e)=> setSex(e.target.value)}
                            />    
                        </div>

                        <div className="field-inscription">
                            <label className="label">Téléphone</label>
                            <input type="text" className="input" placeholder="telephone" 
                                value={phone}
                                onChange={(e)=> SetPhone(e.target.value)}
                            />    
                        </div>

                        <div className="field-inscription">
                            <label className="label">Adresse</label>
                            <input type="text" className="input" placeholder="Rue et n°" 
                                value={street}
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



