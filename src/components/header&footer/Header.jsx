import { useState } from "react";
import { Link } from 'react-router-dom'

import logo from '../../images/grupoMedicoBosques.png'

import './header.css'

const especialidades = ['Ginecología', 'Pediatría', 'Dermatología', 'Psicología', 'Paidopsiquiatría', 'Terapia de Lenguaje', 'Nutrición', 'Acupuntura']

function Header() {

  const [bar, setBar] = useState(8801)
  const [arrow, setArrow] = useState(709)

  const toogleBar = () => {
    if (bar === 8801) {
      setBar(215)
    } else {
      setBar(8801)
    }
  }
  const toogleArrow = () => {
    if (arrow === 709) {
      setArrow(708)
    } else {
      setArrow(709)
    }
  }

  let content = []

  for (let i = 0; i < especialidades.length; i++) {
    content.push(<li key={i}><Link to={`/${especialidades[i]}`} tabIndex='0'>{especialidades[i]}</Link></li>)
  }

  return (
    <header>
      <Link to='/'><img src={logo} alt="Pizzarela-Artesanal" /></Link>
      <label htmlFor="boton" className="iconBarra" >{String.fromCharCode(bar)}</label>
      <input type="checkbox" id="boton" className="inputHeader" onClick={toogleBar}></input>
      <nav className="navega">
        <ul>
          <li>
            <Link to='/' tabIndex='0'>Inicio</Link>
          </li>
          <li>
            <Link to='/conocenos' tabIndex='0'>Conócenos</Link>
          </li>
          <li>
            <label htmlFor="boton-especialidad" className="muestra" tabIndex='0'>Especialidades {String.fromCharCode(arrow)}</label>
            <a href='/#especialidades' className='despues' tabIndex='0'>Especialidades</a>
            <input type="checkbox" id="boton-especialidad" className="inputHeader" onClick={toogleArrow} />
            <ul className="subMenu">
             {content}
            </ul>
          </li>
          <li>
            <Link to='/vacuna' tabIndex='0'>Vacuna</Link>
          </li>
          <li>
            <a href='/#aseguradoras' tabIndex='0'>Aseguradoras</a>
          </li>
          <li>
            <Link to='/contacto' tabIndex='0'>Contacto</Link>
          </li>
          <a href="/#citaOnline"><button>Agenta tu Cita</button></a>
        </ul>
    </nav>
    </header>
  )
}

export default Header
