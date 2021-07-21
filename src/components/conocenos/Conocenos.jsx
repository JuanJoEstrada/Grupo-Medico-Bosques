import './conocenos.css'

function Conocenos() {
  return (
    <section className='conocenos'>
      <article id="Historia">
        <h1>Historia</h1>
        <hr />
        <p>
          A finales de los 90, por primera vez bajo otro nombre, iniciamos varios de los médicos que laboramos en Grupo Médico Bosques.
          <br />
          <br />
          Es en el año 2014 que se restructura el servicio médico, se inicia ampliación y remodelación de nuestras instalaciones, dando 
          paso a una nueva administración cambiando de nombre a “Grupo Médico Bosques“, tomando el nombre de la esencia de lo que somos: 
          un grupo de profesionales en la salud, con cédulas profesionales y títulos universitarios que nos avalan. Bosques, por el lugar 
          donde nos ubicamos, esta colonia que nos ha dado la confianza y la recomendación que durante más de 20 años ha cobijado a los fundadores.
          <br />
          <br />
          Continuamos haciendo la diferencia ofreciendo los servicios de ginecología, pediatría y dermatología, agregándose con la 
          restructuración psicología, paidopsiquiatría, acupuntura, nutrición y terapia de lenguaje.
        </p>
      </article>
      <article id="Mision">
        <h1>Misión</h1>
        <hr />
        <p>Colaborar como grupo de profesionistas médicos para mejorar y preservar la salud así como la calidad de vida de nuestros pacientes; 
          ofreciendo servicios para el bienestar biopsicosocial, siendo nuestro objetivo el paciente como eje de nuestra atención e interactuando 
          como grupo de especialistas con amplia trayectoria y ética intachable. </p>
      </article>
      <article id="Vision">
        <h1>Visión</h1>
        <hr />
        <p>Ser reconocidos como referentes con respecto a la atención integral del paciente, innovando con estrategias médicas y vanguardistas, 
          sin perder nunca el objetivo de acompañamiento en el proceso salud-enfermedad de nuestros pacientes. </p>
      </article>
      <article id="Valores">
        <h1>Valores</h1>
        <hr />
        <p>Nos regimos bajo valores que nos diferencian y forman nuestra identidad, así como estos apuntalan nuestro trabajo a diario fortaleciendo 
          nuestro desempeño y generando cambios continuos para dar un mejor servicio:</p>
          <section className="orderList">
            <ol>
              <li>Humanidad, pensando primero en nuestros pacientes</li>
              <li>Trabajo en equipo</li>
              <li>Pasión y compromiso</li>
              <li>Excelencia profesional</li>
              <li>Honestidad y Responsabilidad</li>
              <li>Innovación con sustentabilidad</li>
              <li>Apoyo a Organizaciones Sociales</li>
            </ol> 
          </section>
      </article>
    </section>
  )
}

export default Conocenos
