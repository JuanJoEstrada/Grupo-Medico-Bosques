import './aseguradorasPorDoctor.css'

function AseguradorasPorDoctor(props) {

  const { aseguradorasArr } = props

  const toRender = aseguradorasArr.map((x, index) => {
    return (
      <figure key={index}><img src={x.imageSource} alt={x.imageName} /></figure>
    )
  })

  return (
    <article id="Aseguradoras" className="aseguradorasPorDoctor">
      <h2>Aseguradoras</h2>
      <hr />
      <p>El personal médico cuenta con convenios en las siguientes aseguradoras.</p>
      <section className="imgAseguradoras">
        {toRender}
      </section>
    </article>
  )
}

export default AseguradorasPorDoctor
