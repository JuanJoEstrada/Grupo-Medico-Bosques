import pediatra from '../../images/pediatra.jpeg'

import './portada.css'

function Portada() {
  return (
    <section className='portada'>
      <section className="primeraVista">
        <h2>Comprometidos con tu bienestar</h2>
        <hr />
        <h1>Al servicio de tu salud con nuestra experiencia</h1>
      </section>
      <section className="imgClinica">
        <img src={pediatra} alt="Clínica" />
      </section>
    </section>
  )
}

export default Portada
