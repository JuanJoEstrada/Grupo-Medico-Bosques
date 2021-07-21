import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/header&footer/Header'
import Footer from './components/header&footer/Footer'
import Inicio from './components/inicio/Inicio'
import Conocenos from './components/conocenos/Conocenos'
import Contacto from './components/contacto/Contacto'
import Vacuna from './components/vacuna/Vacuna'

import Ginecologia from './components/especialidades/Ginecologia'
import Pediatria from './components/especialidades/Pediatria'
import Dermatologia from './components/especialidades/Dermatologia'
import Psicologia from './components/especialidades/Psicologia'
import Paidopsiquiatria from './components/especialidades/Paidopsiquiatria'
import TerapiaDeLenguaje from './components/especialidades/TerapiaDeLenguaje'
import Nutricion from './components/especialidades/Nutricion'

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>

          <Route exact path='/' component={Inicio} />
          <Route exact path='/conocenos' component={Conocenos} />
          <Route exact path='/contacto' component={Contacto} />
          <Route exact path='/vacuna' component={Vacuna} />

          {/* Especialidades Médicas */}
          <Route exact path='/Ginecología' component={Ginecologia} />
          <Route exact path='/Pediatría' component={Pediatria} />
          <Route exact path='/Dermatología' component={Dermatologia} />
          <Route exact path='/Psicología' component={Psicologia} />
          <Route exact path='/Paidopsiquiatría' component={Paidopsiquiatria} />
          <Route exact path='/Terapia de lenguaje' component={TerapiaDeLenguaje} />
          <Route exact path='/Nutrición' component={Nutricion} />
          <Route exact path='/Acupuntura' component={Psicologia} />

        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
