// Properties for Bio:
/* 
  imageRelatedSource, imageRelatedName,
  imageDoctorSource, imageDoctorName,
  masterName, description, phrase, 
*/
import Bio from '../../feature/bio/Bio'

import imageRelatedSource from '../../images/especialidades/4 Psicología/GMB-psicologia.png'
import imageDoctorSource from '../../images/especialidades/4 Psicología/doctor.jpeg'

import './psicologia.css'

const imageRelatedName = 'GMB-psicología'
const imageDoctorName = 'Mtra. Gabriela Godínez Hernández'
const masterName = 'Psicología'
const phrase = null
const description = (
  <p>
    Soy egresada de la Universidad Nacional Autónoma de México. Maestra en Psicología certificada por el Programa de Excelencia del CONACYT, cuento con Especialidades 
    en el área de Salud Clínica, Adicciones, Medicina Alternativa, Recreación y Deporte. Brindo atención personalizada y especializada a niños, adolescentes, adultos y adultos mayores.
    <br /><br />
    Soy Consteladora Familiar egresada del Instituto Jagüey para trabajar la mejora de las relaciones personales, interpersonales, pareja y familia en los diferentes 
    niveles y escenarios de interacción social donde pueda surgir algún conflicto (laboral, empresarial, familiar, escolar, entre otros).
  </p>
)

function Psicologia() {

  window.scrollTo(0, 0);
    
  return (
    <section className='psicologia'>
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
                <section className="unorderList">
                <ul>
                    <li>Asesoría Psiculógica Especializada de acuerdo al área sulicitada.</li>
                    <li>Evaluación y diagnóstico de la personalidad, inteligencia, conductual, académica y psico-neurulógica.</li>
                    <li>Tratamiento Psiculógico focalizado al motivo de consulta.</li>
                </ul>
                </section>
            </section>
            <section className="areas">
                <h2>Áreas a indicar</h2>
                <hr />
            </section>
            <section className="educativa">
                <h2>Educativa</h2>
                <hr />
                <section className="unorderList">
                    <ul>
                        <li>Asesorías Psicológicas a Maestros, Académicos y Directivos.</li>
                        <li>Asesoría a Padres de familia.</li>
                        <li>Manejo del estilo de crianza.</li>
                        <li>Manejo de límites, consecuencias, incentivos y sanciones en los hijos.</li>
                        <li>Problemas de conducta escolar, Bullying, otros más.</li>
                        <li>Uso del tiempo libre y recreación para la mejora de la calidad de vida y como 
                            factores de Protección para la prevención de adicciones o de conductas disfuncionales.
                        </li>
                    </ul>  
                </section>
            </section>
            <section className="clinica">
                <h2>Clínica</h2>
                <hr />
                <section className="unorderList">
                    <ul>
                        <li>Evaluación, diagnóstico y tratamiento personalizado.</li>
                        <li>Manejo de problemas personales, de pareja y familia.</li>
                        <li>Tratamiento para conflictos personales e interpersonales en niños, adolescente, adultos y adultos mayores.</li>
                        <li>Abordajes de los conflictos bajo el enfoque que se desee tratar: Holista, Humanista, Cognitivo-conductual, Conductual, Gestal, Racional-emotivo, y Sistémico.</li>
                        <li>Tratamiento en Adicciones.</li>
                        <li>Abordaje de enfermedades crónico-degenerativas y padecimientos somáticos.</li>
                    </ul>
                </section>
            </section>
            <section className="laboral">
                <h2>Laboral</h2>
                <hr />
                <section className="unorderList">
                    <ul>
                        <li>Conciliación de conflictos laborales.</li>
                        <li>Bournout (cansancio, estrés laboral).</li>
                        <li>Preparación para la entrevista laboral.</li>
                        <li>Evaluación Psicológica del Perfil del Puesto.</li>
                        <li>Asesorías Psicológicas Personalizadas a puestos operativos, mandos medios y Superiores en el manejo empresarial y mejora del liderazgo.</li>
                    </ul>
                </section>
            </section>
            <section className="talleres">
                <h2>Talleres</h2>
                <hr />
                <section className="unorderList">
                    <ul>
                        <li>Creamos y adaptamos talleres a las necesidades que las Instituciones o empresas necesiten.</li> 
                        <li>Contamos con una infinidad de temas para abordarlos terapéuticamente, por ejemplo: Taller para el Manejo de emociones: ansiedad, miedo, tristeza, alegría, enojo. Talleres de Constelaciones Familiares en temas de pareja, autoestima, abuso sexual, etc.</li> 
                    </ul>
                </section>
            </section>
            <section className="intervencion">
                <h2>Intervención en crisis</h2>
                <hr />
                <section className="unorderList">
                    <ul>
                        <li>Manejo de dificultades emocionales.</li>  
                        <li>Pérdida laboral y problemas económicos.</li>  
                        <li>Problemas y conflictos consigo mismo(a).</li>  
                        <li>Manejo en la aceptación de enfermedades crónicas o que amenacen la vida, pérdidas, duelos, muertes trágicas o situaciones muy complejas y agobiantes que se repitan generacionalmente y se desee dejar de repetir patrones de conductas o emociones familiares.</li>  
                    </ul>
                </section>
            </section>
            <section className="prevencion">
                <h2>Prevención de la salud y enfermedades crónico generativas</h2>
                <hr />
                <section className="unorderList">
                    <ul>
                        <li>Abordaje de enfermedades crónico-degenerativas y padecimientos somáticos desde la Medicina Tradicional China y herbolaría.</li>
                        <li>Acupuntura.</li>
                        <li>Auriculoterapia.</li>
                        <li>Moxibustión.</li>
                        <li>Masaje Terapéutico.</li>
                    </ul>
                </section>
            </section>
        </section>
      </article>
    </section>
  )
}

export default Psicologia
