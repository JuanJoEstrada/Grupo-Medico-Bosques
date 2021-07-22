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
import Estatura from '../../feature/estatura/Estatura'

import imageRelatedSource from '../../images/especialidades/2 Pediatría/GMB-pediatria.png'
import imageDoctorSource from '../../images/especialidades/2 Pediatría/doctor.jpeg'
import axa from '../../images/aseguradoras/axa.png'
import mediaccess from '../../images/aseguradoras/mediaccess.jpg'
import metlife from '../../images/aseguradoras/metlife.png'

import './pediatria.css'

const imageRelatedName = 'GMB-pediatría'
const imageDoctorName = 'Dra. Claudia Godínez Hernández'
const masterName = 'Pediatría'
const phrase = 'Será un gusto llevar el crecimiento y desarrollo de tus hijos junto a ti.'
const aseguradorasArr = [
  {imageSource: axa, imageName: 'Axa'},
  {imageSource: mediaccess, imageName: 'MediAccess'},
  {imageSource: metlife, imageName: 'Metlife'},
]
const description = (
  <p>
    Soy médico especialista en Pediatría, egresada del Hospital General de México con aval de la UNAM desde 1996, con recertificación por el Consejo Mexicano de Pediatría con el número 9310.
    <br /><br />
    Soy una apasionada de mi especialidad, con un curso avanzado en Alergia e Inmunología, he realizado múltiples cursos extracurriculares de Puericultura, Nutrición Pediátrica y Neurología Pediátrica.
    <br /><br />
    Atiendo como Pediatra externa en el Hospital Infantil Privado desde hace 24 años con atención a pacientes particulares y de aseguradoras, así como en mi consultorio particular.
    <br /><br />
    Como madre que soy, he enriquecido mi experiencia profesional y personal con la finalidad de acercarme a ti, para asesorarte con los conocimientos vanguardistas que requiere la época pero con la empatía de entender qué sientes tú como mamá, como papá, al ver a tu hijo enfermo.
  </p>
)

function Pediatria() {

  window.scrollTo(0, 0);
  
  return (
    <section className='pediatria'>
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
            <p>Consulta pediátrica</p>
            <p>Consulta prenatal</p>
            <p>Asesoría en lactancia</p>
            <p>Asesoría en nutrición</p>
            <p>Estimulación temprana</p>
            <p>Terapia de lenguaje</p>
            <p>Inhaloterapia</p>
            <p>Talleres</p>
          </section>
          <section className="vacunas">
            <h2>Vacunas</h2>
            <hr />
            <p>Varicela</p>
            <p>Tifoidea</p>
            <p>Rotavirus</p>
            <p>Influenza</p>
            <p>Neumococo</p>
            <p>Tuberculosis</p>
            <p>Meningococo</p>
            <p>Pentavalente</p>
            <p>Herpes Zóster</p>
            <p>Hepatitis tipo A</p>
            <p>Hepatitis tipo B</p>
            <p>Sarampión, Paperas y Rubéola</p>
            <p>Difteria, Tos Ferina y Tétanos</p>
            <p>Virus del Papiloma Humano (VPH)</p>
          </section>
        </section>
      </article>
      <AseguradorasPorDoctor aseguradorasArr={aseguradorasArr} />
      <Estatura />
    </section>
  )
}

export default Pediatria
