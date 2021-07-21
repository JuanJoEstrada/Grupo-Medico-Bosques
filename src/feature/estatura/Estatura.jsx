import { useState } from 'react'

import './estatura.css'

function Estatura() {

  const [niñaEstaturaMama, setNiñaEstaturaMama] = useState(0)
  const [niñaEstaturaPapa, setNiñaEstaturaPapa] = useState(0)
  const [niñoEstaturaMama, setNiñoEstaturaMama] = useState(0)
  const [niñoEstaturaPapa, setNiñoEstaturaPapa] = useState(0)
  const [niñaAdulta, setNiñaAdulta] = useState(0)
  const [niñoAdulto, setNiñoAdulto] = useState(0)

  const handleChange = ({ target }) => {
    switch (target.id) {
      case 'niñaEstaturaMama':
        setNiñaEstaturaMama(target.value)
        break;
      case 'niñaEstaturaPapa':
        setNiñaEstaturaPapa(target.value)
        break;
      case 'niñoEstaturaMama':
        setNiñoEstaturaMama(target.value)
        break;
      case 'niñoEstaturaPapa':
        setNiñoEstaturaPapa(target.value)
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.id)
    switch (e.target.id) {
      case 'formNiña':
        const heightGirl = (Number(niñaEstaturaMama) + Number(niñaEstaturaPapa) - 13) / 2
        setNiñaAdulta(heightGirl)
        break;
      case 'formNiño':
        const heightBoy = (Number(niñoEstaturaMama) + Number(niñoEstaturaPapa) + 13) / 2
        setNiñoAdulto(heightBoy)
        break;
      default:
        break;
    }
  }

  const handleReset = ({ target }) => {
    console.log(target)
    switch (target.id) {
      case 'resetNiña':
        setNiñaEstaturaMama(0)
        setNiñaEstaturaPapa(0)
        setNiñaAdulta(0)
        break;
      case 'resetNiño':
        setNiñoEstaturaMama(0)
        setNiñoEstaturaPapa(0)
        setNiñoAdulto(0)
        break;
      default:
        break;
    }
  }

  return (
    <article className="estatura">
      <h2>Estatura de tu bebé en su vida adulta</h2>
      <hr />
      <section className="ambos">
        <section className="niña">
          <h3>Niña</h3>
          <br />
          <form id="formNiña" onSubmit={handleSubmit}>
              <label htmlFor="estaturaMama">Estatura de mamá:</label>
              <br />
              <input type="number" value={niñaEstaturaMama} id="niñaEstaturaMama" step="any" min="1" max="250" required onChange={handleChange} />cm
              <br />
              <br />
              <label htmlFor="estaturaPapa">Estatura de papá:</label>
              <br />
              <input type="number" value={niñaEstaturaPapa} id="niñaEstaturaPapa" step="any" min="1" max="250" required onChange={handleChange} />cm
              <br />
              <br />
              <button type="submit" id="calculaNiña">Calcular</button>
              <button type="reset" id='resetNiña' onClick={handleReset}>Cancelar</button>
          </form>
          <p>Estatura: <span id="niñaEstatura"></span>{niñaAdulta}cm</p>
        </section>
        <section className="niño">
          <h3>Niño</h3>
          <br />
          <form id="formNiño" onSubmit={handleSubmit}>
              <label htmlFor="estaturaMama">Estatura de mamá:</label>
              <br />
              <input type="number" value={niñoEstaturaMama} id="niñoEstaturaMama" step="any" min="1" max="250" required onChange={handleChange} />cm
              <br />
              <br />
              <label htmlFor="estaturaPapa">Estatura de papá:</label>
              <br />
              <input type="number" value={niñoEstaturaPapa} id="niñoEstaturaPapa" step="any" min="1" max="250" required onChange={handleChange} />cm
              <br />
              <br />
              <button type="submit" id="calculaNiño">Calcular</button>
              <button type="reset" id='resetNiño' onClick={handleReset}>Cancelar</button>
          </form>
          <p>Estatura: <span id="niñoEstatura"></span>{niñoAdulto}cm</p>
        </section>
      </section>
    </article>
  )
}

export default Estatura
