import { useState} from 'react'
import cloneDeep from 'lodash.clonedeep'
import Calendar from 'react-calendar'

import './fpp.css'

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function Fpp() {

  const [dateValue, setDateValue] = useState(new Date());

  const handleChange = date => {
    setDateValue(date)
  }

  const fpp = () => {
    const copiedDate = cloneDeep(dateValue)
    copiedDate.setDate(copiedDate.getDate() + 280)
    return copiedDate
  }

  return (
    <article className="fechaPP">
      <h2>Día de Parto</h2>
      <hr />
      <p>Fecha probable de parto (FPP) en función de fecha última de menstruación (FUM)</p>
      <p>Por favor, ingrese fecha última de menstruación</p>
      <Calendar value={dateValue} onClickDay={handleChange} />
      <div>
        <p className='selecteddate'>Fecha seleccionada:</p>
        <p className='selecteddateDate' >{`${dateValue.toLocaleDateString('es-ES', options)}`}</p>
      </div>
      <div>
        <p className='fpp'>Fecha pobrable de parto:</p> 
        <p className='fppDate'>{`${fpp().toLocaleDateString('es-ES', options)}`}</p>
      </div>
    </article>
  )
}

export default Fpp
