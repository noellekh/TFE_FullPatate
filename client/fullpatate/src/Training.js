import React, {useState, useEffect} from "react";
import NavbarClient from "./components/NavbarClient";
import imgsquat from "./img/air-squat.jpg";
import crunch from "./img/crunch.jpg";
import planche from "./img/plank.jpg";
import "./css/Training.css";
import axios from 'axios';



const Training =()=>{

    const [trains, setTrain] = useState([])

    useEffect( ()=>{
        getAllTraining()
    },[])

    const getAllTraining = async function(){
        const res = await axios.get('http://localhost:3001/api/v1/training/all_training')
        setTrain(res.data)
    }

    return(
        <div className="training">
            <NavbarClient/>
            <div className="training-container">
            <h1>Exercices</h1>

  

            <div className="exercice">
            { trains.map( (train)=>(
                
                <div className="exo-name">
                    key={train.id_training}
                <h2>{train.training_name}</h2>
                <img classNmae="exo-img" src={imgsquat} alt="img"/>
                <p>{train.training_descri}</p>
                <form className="exo-form">
                    <input type="text" className="exo-input" placeholder="Nbr de répétition en 30s"/>
                    <button className="exo-button">Ajouter score</button>
                </form>

                </div>

                ))}




            </div>
            </div>


        </div>
    )


}

export default Training;
