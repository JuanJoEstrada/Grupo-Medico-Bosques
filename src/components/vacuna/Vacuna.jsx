import Polivacc from '../../images/POLIVACC/Polivacc.png'
import StaphylococosAureus from '../../images/POLIVACC/Staphylococos-Aureus.jpg'
import Streptococcusmitis from '../../images/POLIVACC/pneumoniae.jfif'
import pneumoniae from '../../images/POLIVACC/pneumoniae.jpg'
import Corynebacterium from '../../images/POLIVACC/Corynebacterium.jpg'

import './vacuna.css'

function Vacuna() {
  return (
    <section className='vacuna'>
      <section className='vacunaPortada'>
        <figure><img src={Polivacc} alt='Polivacc' /></figure>
        <section className="primeraVista">
          <h1>Vacuna Polivacc</h1>
          <hr />
          <h2>Suspensión bacteriana que ayuda a fortalecer el sistema inmunológico contra las infecciones en vías respiratorias</h2>
        </section>
      </section>
      <section className='infoVacuna'>
        <section className='pregunta'>
          <h2>¿Qué es Polivacc?</h2>
          <p>
            Es una suspensión que contiene las catorce bacterias que comúnmente ocasionan infecciones en las viás respiratorias,
            una vez administrada es capaz de producir anticuerpos (defensas) específicos contra estas bacterias, haciendo que el organismo
            sea más resistente a las infecciones de vías respiratorias.
          </p>
        </section>
        <section className='pregunta'>
          <h2>¿Cuáles son los beneficios?</h2>
          <ul>
            <li>
              Mejora la respuesta inmunológica ante las infecciones.
            </li>
            <li>
              Reduce el número de infecciones, así como su intensidad y duración.
            </li>
            <li>
              Mejora el umbral inmunológico frente a las bacterias y virus causantes de las infecciones respiratorias.
            </li>
            <li>
              Reduce el uso de antibióticos y medicamentos utilizados en cuadroas agudos de infección.
            </li>
          </ul>
        </section>
        <section className='pregunta'>
          <h2>¿Cómo se administra?</h2>
          <p>
            Sublingual, es decir, debajo de la lengua. Fácilmente aplicable en niños y adultos.
          </p>
        </section>
        <section className='pregunta'>
          <h2>¿En qué personas se administra?</h2>
          <p>
            Desde niños a partir de los 6 meses de edad hasta personas de la tercera edad.
            En todos aquellos pacientes que tienen cuadros repetidos de infección en vías respiratorias,
            o que desean prevenirlos. Para aquellas personas que desean mejorar su sistema inmunológico.
          </p>
        </section>
        <section className='pregunta'>
          <h2>¿Reacciones secundarias?</h2>
          <p>
            No se han descrito reacciones adversas y es compatile con cualquier terapia médica y otro tipo de vacunas.
          </p>
        </section>
        <section className='pregunta'>
          <h2>¿Cómo se conserva?</h2>
          <p>
            Debe mantenerse en refrigeración entre 2 y 10 grados centígrados, si es necesario se puede mantener en bolsa de transporte
            con anticongelante por 6 horas sin afectar a la vacuna.
          </p>
        </section>
      </section>
      <section className='imageVacuna'>
       <figure><img src={StaphylococosAureus} alt='StaphylococosAureus' /></figure>
       <figure><img src={Streptococcusmitis} alt='Streptococcusmitis' /></figure>
       <figure><img src={pneumoniae} alt='pneumoniae' /></figure>
       <figure><img src={Corynebacterium} alt='Corynebacterium' /></figure>
      </section>
      <section className='contactoVacuna'>
        <h2>Para mayor información, comunícate con nosotros.</h2>
      </section>
    </section>
  )
}

export default Vacuna
