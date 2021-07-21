import React from 'react'

import logo from '../../images/grupoMedicoBosques.png'
import iconFacebook from '../../images/iconFacebook.png'

import './footer.css'

function Footer() {
  return (
    <footer>
      <section className="info">
        <figure>
            <img src={logo} alt="" />
        </figure>
        <section className="footerInfo">
          <section className="llamanos">
              <h4>Llámanos</h4>
              <br />
              <p>55 5766 1236</p>
              <p>55 5794 4084</p>
          </section>
          <section className="numeroWhats">
              <h4>Whatsapp</h4>
              <br />
              <p>+52 55 3265 7988</p>
          </section>
          <section className="localizanos">
              <h4>Localízanos</h4>
              <br />
              <p>Bosques de España 55, Bosques de Aragón, Nezahualcóyotl, Edo. Méx.</p>
          </section>
          <section className="horarios">
              <h4>Horarios</h4>
              <br />
              <p>Lun-Vier: 09:00 - 19:00</p>
              <p>Sáb: 10:00 - 16:00</p>
          </section>
          <section className="iconFace">
              <h4>Síguenos</h4>
              <br />
              <a href="https://www.facebook.com/grupomedicobosques" target="_blank" rel='noreferrer'><figure><img src={iconFacebook} alt="" /></figure></a>
          </section>
        </section>
      </section>
      <hr />
      <section className="copyright">
        {/* <a href=""><p>Aviso de Privacidad</p></a> */}
        <p>Copyright &copy; México 2021 Grupo Médico Bosques</p>
      </section>
    </footer>
  )
}

export default Footer
