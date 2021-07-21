// Properties for Bio:
/* 
  imageRelatedSource, imageRelatedName,
  imageDoctorSource, imageDoctorName,
  masterName, description, phrase, 
*/
import Bio from '../../feature/bio/Bio'

import imageRelatedSource from '../../images/especialidades/5 Paidopsiquiatría/GMB-paidopsiquiatria.png'
import imageDoctorSource from '../../images/especialidades/5 Paidopsiquiatría/doctor.jpeg'
import './paidopsiquiatria.css'

const imageRelatedName = 'GMB-paidopsiquiatría'
const imageDoctorName = 'Dr. Francisco José García Rangel'
const masterName = 'Paidopsiquiatría'
const phrase = 'Porque la Salud Mental es fundamental en el desarrollo humano, estoy para orientarte y ayudarte.'
const description = (
  <p>
    Soy Médico especialista en Psiquiatría formado en el Hospital Psiquiátrico Fray Bernardino Álvarez y sub especialista en Psiquiatría de Niños y Adolescentes (Paidopsiquiatría) 
    formado en el Hospital Psiquiátrico Infantil Dr. Juan N. Navarro y avalado por la Facultad de Medicina de la UNAM. Certificado por el Consejo Mexicano de Psiquiatría.
    <br /><br />
    Cuento con más de 10 años de experiencia en el ámbito de la atención clínica en temas relacionados a la Salud Mental de Niños, adolescentes y adultos.
    <br /><br />
    Atiendo cualquier padecimiento asociado a la salud mental como depresión, ansiedad o déficit de atención con hiperactividad.
  </p>
)

function Paidopsiquiatria() {

  window.scrollTo(0, 0);
  
  return (
    <section className='paidopsiquiatria'>
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
                <p>Valoración del Estado Mental</p>
                <p>Consulta Medico-Psiquiatrica</p>
                <p>Informes Medico-Psiquiátricos</p>
                <p>Peritajes Psiquiátricos  </p>
                <p>Asesorías en cualquier tema referente a Salud Mental</p>
                <p>Educación sexual para niños y Adolescentes</p>
                <p>Diagnóstico y tratamiento de padecimientos como depresión, ansiedad, TDAH, Insomnio, fobias, demencias, uso de sustancias, problemas de conducta, suicidio en personas de cualquier edad</p>
            </section>
        </section>
        </article>
    </section>
  )
}

export default Paidopsiquiatria
