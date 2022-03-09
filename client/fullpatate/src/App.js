import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import NavbarClassic from './components/NavbarClassic';
//import NavbarClient from './components/NavbarClient';
//import NavbarAdmin from './components/NavbarAdmin.js';
import AccueilClassic from './AccueilClassic';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AgendaClient from './AgendaClient';
import AgendaAdmin from './AgendaAdmin';
import Inscription from './Inscription';
import Connexion from './Connexion';


function App() {
  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<AccueilClassic />} />
        <Route path='/agenda-client' element={<AgendaClient />}/>
        <Route path='/agenda-admin' element={<AgendaAdmin />}/>
        <Route path='/inscription' element={<Inscription />}/>
        <Route path='/connexion' element={<Connexion />}/>
       
      </Routes>
    </Router>
  );
}

export default App;
