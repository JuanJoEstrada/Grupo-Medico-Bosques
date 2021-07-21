import './contacto.css'

function Contacto() {
  return (
    <section className='contacto'>
      <section className='section1'>
        <h2>¿Alguna consulta?</h2>
        <p>Grupo Médico Bosques tiene los mejores especialistas.</p>
        <p>Ponte en contacto con nuestras secretarias para cualquier duda.</p>
      </section>
      <hr />
      <section className='section2'>
        <h2>WhatsApp</h2>
        <p>+52 55 3265 7988</p>
      </section>
      <section className='section2'>
        <h2>Teléfonos</h2>
        <p>55 5766 1236</p>
        <p>55 5794 4084</p>
      </section>
      {/* <figure className='divisor'><img src={divisor} alt='divisor' /></figure> */}
      <hr />
      <section className='horarios'>
        <h2>Horarios</h2>
        <section className='hora'>
          <p className='dia'>Lunes</p>
          <p>09:00 --- 19:00</p>
        </section>
        <section className='hora'>
          <p className='dia'>Martes</p>
          <p>09:00 --- 19:00</p>
        </section>
        <section className='hora'>
          <p className='dia'>Miércoles</p>
          <p>09:00 --- 19:00</p>
        </section>
        <section className='hora'>
          <p className='dia'>Jueves</p>
          <p>09:00 --- 19:00</p>
        </section>
        <section className='hora'>
          <p className='dia'>Viernes</p>
          <p>09:00 --- 19:00</p>
        </section>
        <section className='hora'>
          <p className='dia'>Sábado</p>
          <p className='horaEspecial'>10:00 --- 16:00</p>
        </section>
        <section className='hora'>
          <p className='dia'>Domingo</p>
          <p>--- Cerrado ---</p>
        </section>
      </section>
      {/* <figure className='divisor'><img src={divisor} alt='divisor' /></figure> */}
      <hr />
      <section className='section3'>
        <h2>¿Sugerencias y comentarios?</h2>
        <p>Ayúdanos a mejor Grupo Médico Bosques. Si tienes algún comentario o sugerencia, no dudes en escribirnos.</p>
      </section>
    </section>
  )
}

export default Contacto
