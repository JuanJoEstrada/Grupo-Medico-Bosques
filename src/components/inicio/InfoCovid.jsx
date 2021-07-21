import covid from '../../images/covid.png'
import cubreboca from '../../images/cubreboca.png'

import './infoCovid.css'

function InfoCovid() {
  return (
    <section className='infoCovid'>
      <section className="imagenes">
        <section className="imagenVirus">
            <img src={covid} alt="virus covid-19" />
        </section>
        <section className="imagenDoctor">
            <img src={cubreboca} alt="doctor con cubrecoba" />
        </section>
      </section>
      <section className="normasCovid">
        <h2>¡Atención!</h2>
        <h3>Medidas de seguridad en las instalaciones por <i>COVID-19</i></h3>
        <hr />
        <ol>
            <li><b>Únicamente se permitirá el ingreso al paciente.</b> En caso de ser <b>menor de edad</b>, se le permitirá el acceso con <b>un adulto.</b> (Si vienen acompañados se les pedirá que esperen fuera de las instalaciones por seguridad de todos).</li>
            <li>Es obligatorio portar cubrebocas al ingresar.</li>
            <li>Mantener la distancia de 1.5m por persona.</li>
            <li>Al salir de su cita, por favor lavarse las manos y aplicarse gel antibacterial.</li>
            <li><b>El personal de recepción únicamente atenderá a un paciente por especialidad.</b> Es importante que nos apoye y espere sentado mientras es su turno, esto con el fin de evitar aglomeraciones.</li>
            <li><b>Si cuenta con fiebre o alguna enfermedad en vías respiratorias favor de notificar al confirmar su cita médica.</b></li>
        </ol>
        <hr />
        <p>Le recordamos que nuestras instalaciones son esterilizadas diariamente para poder brindar una atención segura.</p>
      </section>
    </section>
  )
}

export default InfoCovid
