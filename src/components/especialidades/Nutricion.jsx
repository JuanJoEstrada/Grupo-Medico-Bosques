// Properties for Bio:
/* 
  imageRelatedSource, imageRelatedName,
  imageDoctorSource, imageDoctorName,
  masterName, description, phrase, 
*/
import Bio from '../../feature/bio/Bio'

import imageRelatedSource from '../../images/especialidades/7 Nutrición/GMB-nutricion.png'
import imageDoctorSource from '../../images/especialidades/7 Nutrición/doctor.jpeg'
import './nutricion.css'

const imageRelatedName = 'GMB-nutrición'
const imageDoctorName = 'Lic. Karla Miroslava Monter García'
const masterName = 'Nutrición'
const phrase = '¡Recuerda que la Nutrición es Salud!'
const description = (
  <p>
    Soy Licenciada especializada en Nutrición, egresada de la Universidad Tecnológica de México (UNITEC), desde el 2018.
    <br /><br />
    Cuento con un diplomado de Chef profesional egresada del Centro Integral de Artes Culinarias (CIAC), lo cual me ayuda a entender a mis pacientes en gustos, sabores 
    y combinaciones de alimentos, sin dejar de lado lo más importante que es una buena nutrición y por ende una mejora en salud. Así mismo cuento con un diplomado de Cineantropometría (nivel 1), 
    por parte de La Sociedad Internacional para el avance de la Cineantropometría (ISAK, por sus siglas en inglés).
    <br /><br />
    ¡Soy amante de mi carrera!, me apasiona ayudar a las personas a lograr sus objetivos personales de salud, y enseñarles una alimentación adecuada y equilibrada de acuerdo a su necesidad.
    <br /><br />
    Como Licenciada en Nutrición, me he dado cuenta de que hoy en día la alimentación es la base para poder mejorar nuestra calidad de vida (hablando en salud física interior y exterior) 
    por lo tanto es importante saber que una mala nutrición puede reducir el fortalecimiento del sistema inmunológico, aumentar la vulnerabilidad a las enfermedades, alterar el desarrollo físico y mental, y reducir la productividad.
  </p>
)

function Nutricion() {

  window.scrollTo(0, 0);
  
  return (
    <section className='nutricion'>
      <Bio
        imageRelatedSource={imageRelatedSource} imageRelatedName={imageRelatedName}
        imageDoctorSource={imageDoctorSource} imageDoctorName={imageDoctorName}
        masterName={masterName} description={description} phrase={phrase} 
      />
      <article className="backColor">
        <section className="servicios">
          <section className="consulta">
              <h2>Consultas</h2>
              <hr />
              <p>Prevención y educación nutricional</p>
              <p>Control y reducción de peso</p>
              <p>Síndrome metabólico</p>
              <p>Control de embarazo</p>
              <p>Enfermedad renal, diabetes, hipertensión</p>
              <p>Nutrición deportiva</p>
          </section>
        </section>
      </article>
    </section>
  )
}

export default Nutricion
