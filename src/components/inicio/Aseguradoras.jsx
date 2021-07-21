import axa from '../../images/aseguradoras/axa.png'
import banorte from '../../images/aseguradoras/banorte.png'
import mediaccess from '../../images/aseguradoras/mediaccess.jpg'
import metlife from '../../images/aseguradoras/metlife.png'
import vitamedica from '../../images/aseguradoras/vitamedica.png'

import './aseguradoras.css'

function Aseguradoras() {
  return (
    <section id='aseguradoras' className='aseguradoras'>
      <h2>Aseguradoras</h2>
      <hr />
      <p>El personal médico cuenta con convenios en las siguientes aseguradoras.</p>
      <section className="imgAseguradoras">
        <figure><img src={axa} alt="Axxa" /></figure>
        <figure><img src={banorte} alt="Banorte" /></figure>
        <figure><img src={mediaccess} alt="Mediaccess" /></figure>
        <figure><img src={metlife} alt="Metlife" /></figure>
        <figure><img src={vitamedica} alt="Vitamedica" /></figure>
      </section>
    </section>
  )
}

export default Aseguradoras
