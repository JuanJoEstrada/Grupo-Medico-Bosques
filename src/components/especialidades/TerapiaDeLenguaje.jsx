// Properties for Bio:
/* 
  imageRelatedSource, imageRelatedName,
  imageDoctorSource, imageDoctorName,
  masterName, description, phrase, 
*/
import Bio from '../../feature/bio/Bio'

import imageRelatedSource from '../../images/especialidades/6 Terapia de Lenguaje/GMB-terapia-de-lenguaje.png'
import imageDoctorSource from '../../images/especialidades/6 Terapia de Lenguaje/doctor.jpeg'
import './terapiaDeLenguaje.css'

const imageRelatedName = 'GMB-terapia-de-lenguaje'
const imageDoctorName = 'Lic. Irais Baelón Cervantes'
const masterName = 'Terapia de Lenguaje'
const phrase = '“El lenguaje es el vestido del pensamiento”'
const description = (
  <p>
    Soy Licenciada en Educación Especial, egresada de la Universidad Autónoma de Tlaxcala en el año 2008. Así mismo tengo la carrera en “Técnico en puericultura”, 
    ambas carreras las he combinado con múltiples cursos y diplomados de los cuales destacan los más relevantes: “Avances en el tratamiento de labio y paladar 
    hendido y malformaciones craneofaciales”, “Curso de Braille”, Comunicación alternativa con tobii “SNAP + core first power Academy”, “Discapacidad Auditiva”.
    <br /><br />
    He trabajado en diferentes instituciones reconocidas como APAC, SER HUMANO Y CRENIEE, con personas que presentan alguna deficiencia física, mental, intelectual, 
    sensorial, visual, auditiva y lenguaje. Utilizando diferentes estrategias para el favorecimiento de cada persona como “Braille, comunicación alternativa por medio del tobii, método PECS, método TEACCH, entre otros.
    <br /><br />
    Realizo asesoramiento para padres y profesionales en el manejo de diferentes estrategias, dirigido a personas con alguna necesidad educativa especial, además la elaboración y aplicación de programas educativos.
    <br /><br />
    Atención especializada a problemas de lenguaje, aprendizaje y trastornos del neurodesarrollo.
    <br /><br />
    Tengo amplia experiencia en pacientes autistas, disléxicos, TDAH, discapacidad auditiva y/o visual, logrando la integración a entornos incluyentes.
    <br /><br />
    Averiguamos qué clase de problema de lenguaje tiene su pequeño, determinamos qué lo está causando y decidimos con usted la estrategia.
  </p>
)

function TerapiaDeLenguaje() {

  window.scrollTo(0, 0);
  
  return (
    <section className='terapiaDeLenguaje'>
      <Bio
        imageRelatedSource={imageRelatedSource} imageRelatedName={imageRelatedName}
        imageDoctorSource={imageDoctorSource} imageDoctorName={imageDoctorName}
        masterName={masterName} description={description} phrase={phrase} 
      />
      <article className="backColor">
        <section className="servicios">
          <section className="talleres">
            <h2>Talleres</h2>
            <hr />
            <section className="unorderList">
              <ul>
                <li>Taller de Lectoescritura</li>
                <li>Taller de Tareas</li>
                <li>Talleres y coaching para maestros y pedagogos</li>
                <li>Estimulación temprana</li>
              </ul>
            </section>
          </section>
          <section className="asesoramiento">
            <h2>Asesoramientos</h2>
            <hr />
            <section className="unorderList">
              <ul>
                <li>Manejo y acompañamiento en Dislexia</li>
                <li>Estimulación Temprana</li>
                <li>Estimulación Multisensorial</li>
                <li>Manejo de paciente con discapacidad visual</li>
                <li>Manejo de paciente con discapacidad auditiva</li>
                <li>Regularización y Monitoreo Pedagógico</li>
                <li>Asesor Educativo</li>
                <li>Ludoteca y Cuenta Cuentos</li>
                <li>Regularización escolar con enfoque humanista</li>
              </ul>  
            </section>
          </section>
          <section className="consulta">
            <h2>Consultas</h2>
            <hr />
            <section className="unorderList">
              <ul>
                <li>Terapia de lenguaje</li>
                <li>Terapia de aprendizaje</li>
                <li>Terapia de integración escolar</li>
                <li>Terapia de Juego</li>
                <li>Terapia Conductual aplicada en la niñez</li>
                <li>Terapia para adolescentes y adultos (afasias)</li>
              </ul>
            </section>
          </section>
        </section>
      </article>
    </section>
  )
}

export default TerapiaDeLenguaje
