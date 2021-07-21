// Properties for Bio:
/* 
  imageRelatedSource, imageRelatedName,
  imageDoctorSource, imageDoctorName,
  masterName, description, phrase, 
*/
import Bio from '../../feature/bio/Bio'

// Property for AseguradorasPorDoctor must be an array
/*
  [{imageSource: vitamedica, imageName: 'Vitamedica'}]
*/
import AseguradorasPorDoctor from '../../feature/aseguradorasPorDoctor/AseguradorasPorDoctor'

import imageRelatedSource from '../../images/especialidades/3 Dermatología/GMB-dermatologia.png'
import imageDoctorSource from '../../images/especialidades/3 Dermatología/doctor.jpeg'
import axa from '../../images/aseguradoras/axa.png'
import vitamedica from '../../images/aseguradoras/vitamedica.png'

import './dermatologia.css'

const imageRelatedName = 'GMB-dematología'
const imageDoctorName = 'Dra. Gabriela Fernández Arista'
const masterName = 'Dermatología'
const phrase = null
const aseguradorasArr = [
  {imageSource: axa, imageName: 'Axa'},
  {imageSource: vitamedica, imageName: 'Vitamedica'},
]
const description = (
  <p>
    Soy dermatóloga, dermatooncóloga y cirujana dermatóloga, egresada del Centro Dermatológico Dr. Ladislao de la Pascua, que tiene aval de la UNAM y es uno de los centros 
    de asistencia y enseñanza de Dermatología más reconocidos en México. Mi experiencia de más de 15 años, se ha enriquecido con múltiples cursos y diplomados nacionales e internacionales.
    <br /><br />
    Cuento con recertificación vigente por el Consejo Mexicano de Dermatología.
    <br /><br />
    Mi prioridad es brindar una consulta minuciosa y ética, escuchar las inquietudes de mis pacientes, brindarles información detallada y actual de su enfermedad y 
    ofrecer tratamientos de vanguardia, siempre respaldados por evidencia científica.
  </p>
)

function Dermatologia() {

  window.scrollTo(0, 0);
  
  return (
    <section className='dermatologia'>
      <Bio
        imageRelatedSource={imageRelatedSource} imageRelatedName={imageRelatedName}
        imageDoctorSource={imageDoctorSource} imageDoctorName={imageDoctorName}
        masterName={masterName} description={description} phrase={phrase} 
      />
      <article className="backColor">
        <section className="servicios">
          <section className="consulta">
            <h2>Dermato-oncología y Cirugía Dermatológica</h2>
            <hr />
            <section className="unorderList">
              <ul>
                <li>Detección y tratamiento de lesiones premalignas y cáncer de piel.</li>
                <li>Extirpación de lunares, lipomas y otros tumores de la piel.</li>
                <li>Evaluación y tratamiento de uña enterrada.</li>
              </ul>
            </section>
          </section>
          <section className="clinica">
            <h2>Dermatología Clínica</h2>
            <hr />
            <section className="unorderList">
              <ul>
                <li>Acné.</li>
                <li>Dermatitis.</li>
                <li>Infecciones.</li>
                <li>Manchas por sol o edad.</li>
                <li>Vitiligo.</li>
                <li>Evaluación por tricoscopía de calvicie, caída de cabello y alopecias.</li>
                <li>Evaluación dermatoscópica de lunares.</li>
                <li>Enfermedades de las uñas.</li>
                <li>Hiperhidrosis (exceso de sudoración).</li>
              </ul>  
            </section>
          </section>
          <section className="estetica">
            <h2>Dermatología Estética</h2>
            <hr />
            <section className="unorderList">
              <ul>
                <li>Microdermoabrasión.</li>
                <li>Quimioexfoliación (Peeling).</li>
                <li>Aplicación de toxina botulínica (BOTOX).</li>
                <li>Aplicación de luz intensa pulsada para manchas, rojeces, daño solar, rosácea y depilación de áreas delicadas.</li>
                <li>Armonización (ácido hialurónico) y bioestimulación facial.</li>
                <li>Estrías y cicatrices.</li>
              </ul>
            </section>
          </section>
          </section>
      </article>
      <AseguradorasPorDoctor aseguradorasArr={aseguradorasArr} />
    </section>
  )
}

export default Dermatologia
