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
import Fpp from '../../feature/fechaProbableParto/Fpp'

import imageRelatedSource from '../../images/especialidades/1 Ginecología/GMB-ginecologia.png'
import imageDoctorSource from '../../images/especialidades/1 Ginecología/doctor.jpeg'
import imageDoctorWorking from '../../images/especialidades/1 Ginecología/doctorTrabajando.jpeg'
import vitamedica from '../../images/aseguradoras/vitamedica.png'

import './ginecologia.css'

const imageRelatedName = 'GMB-ginecología'
const imageDoctorName = 'Dr. José Alberto Brime Alfonso'
const masterName = 'Ginecología'
const phrase = '¡Tu bienestar es mi corresponsabilidad!'
const aseguradorasArr = [{imageSource: vitamedica, imageName: 'Vitamedica'}]
const description = (
  <p>
    Soy Médico Ginecoobstetra y Colposcopista egresado del Hospital General de México con aval de la UNAM. Certificado y recertificado por el Consejo Mexicano de  Ginecología y Obstetricia.
    <br /><br />
    Más de 30 años de experiencia hospitalaria y de consulta privada me respaldan. Actualmente, soy el Presidente del Colegio Nacional de Docencia e Investigación en Colposcopia, A.C.
    <br /><br />
    Mi mayor interés es cuidar la salud femenina mediante una valoración integral de mis pacientes, fomentando su autocuidado a través de una cultura médica preventiva.
  </p>
)

function Ginecologia() {

  window.scrollTo(0, 0);
  
  return (
    <section className='ginecologia'>
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
            <p className="otroColor">Diagnóstico oportuno a:</p>
            <p>Control del embarazo y atención del parto</p>
            <p>Enfermedades mamarias</p>
            <p>Enfermedades mamarias</p>
            <p>Virus del papiloma humano y verrugas</p>
            <p>Infecciones vaginales</p>
            <p>Trastornos menstruales del climaterio y menopausia</p>
            <p>Diagnóstico integral para la mujer</p>
            <p>Anticoncepción</p>
          </section>
          <figure><img src={imageDoctorWorking} alt={imageDoctorName} /></figure>
        </section>
      </article>
      <AseguradorasPorDoctor aseguradorasArr={aseguradorasArr} />
      <Fpp />
    </section>
  )
}

export default Ginecologia
