import { Link } from 'react-router-dom'

import ginecologiaImg from '../../images/especialidades/1 Ginecología/ginecologia.png'
import pediatriaImg from '../../images/especialidades/2 Pediatría/pediatria.png'
import dermatologiaImg from '../../images/especialidades/3 Dermatología/dermatologia.png'
import psicologiaImg from '../../images/especialidades/4 Psicología/psicologia.png'
import paidopsiquiatriaImg from '../../images/especialidades/5 Paidopsiquiatría/paidopsiquiatria.png'
import terapiaDeLenguajeImg from '../../images/especialidades/6 Terapia de Lenguaje/terapiaDeLenguaje.png'
import nutricionImg from '../../images/especialidades/7 Nutrición/nutricion.png'
import acupunturaImg from '../../images/especialidades/8 Acupuntura/acupuntura.png'

import './especialidades.css'

function Especialidades() {

  const especialidadesArray = [
    {
      name: 'Ginecología',
      sourceImage: ginecologiaImg,
      description: 'Seguimiento de la salud ginecológica en distintas etapas de la mujer.',
    },
    {
      name: 'Pediatría',
      sourceImage: pediatriaImg,
      description: 'Especialización médica del niño desde su nacimiento hasta su adolescencia.',
    },
    {
      name: 'Dermatología',
      sourceImage: dermatologiaImg,
      description: 'Atención centrada en enfermedades de la piel, uñas, cabello.',
    },
    {
      name: 'Psicología',
      sourceImage: psicologiaImg,
      description: 'Comportamiento del ser humano, en relación con el medio ambiente físico y social que lo rodea.',
    },
    {
      name: 'Paidopsiquiatría',
      sourceImage: paidopsiquiatriaImg,
      description: 'Psiquiatra enfocado desde el nacimiento hasta inicios de la vida adulta.',
    },
    {
      name: 'Terapia de Lenguaje',
      sourceImage: terapiaDeLenguajeImg,
      description: 'Tratamiento de alteraciones en audición, habla y motricidad oral durante el desarrollo.',
    },
    {
      name: 'Nutrición',
      sourceImage: nutricionImg,
      description: 'La alimentación es fundamental para el buen desarrollo y estado de la salud humana.',
    },
    {
      name: 'Acupuntura',
      sourceImage: acupunturaImg,
      description: 'Medicina oriental para prevención y tratamiento de enfermedades por medio de finas agujas.',
    }
  ]

  const toRender = especialidadesArray.map((element, index) => {
    return (
      <Link id="logoEspImg" className={element.name} to={element.name} key={index}>
        <figure>
            <img src={element.sourceImage} alt={element.name} />
        </figure>
        <figcaption>{element.name}</figcaption>
        <p>{element.description}</p>
      </Link>
    )
  })



  return (
    <section id='especialidades' className='especialidades'>
      <h2>Especialidades</h2>
      <hr />
      <p>Los mejores médicos puestos a tu disposición para un excelente cuidado de ti y tu familia.</p>
      <section id="logoEspecialidades">
        {toRender}
      </section>
    </section>
  )
}

export default Especialidades
