import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import NavbarClassic from './components/NavbarClassic';
//import NavbarClient from './components/NavbarClient';
//import NavbarAdmin from './components/NavbarAdmin.js';
import AcceuilClient from './AccueilClient';
import AccueilClassic from './AcceuilClassic';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AgendaClient from './AgendaClient';
import AgendaAdmin from './AgendaAdmin';
import Inscription from './Inscription';
import Connexion from './Connexion';
import Training from './Training';


function App() {
  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<AccueilClassic />} />
        <Route path='/accueil-classic' element={<AccueilClassic/>}/>
        <Route path='/accueil-client' element={<AcceuilClient/>}/>
        <Route path='/agenda-client' element={<AgendaClient />}/>
        <Route path='/agenda-admin' element={<AgendaAdmin />}/>
        <Route path='/inscription' element={<Inscription />}/>
        <Route path='/connexion' element={<Connexion />}/>
        <Route path="/training" element={<Training />}/>
       
      </Routes>
    </Router>
  );
}

export default App;
