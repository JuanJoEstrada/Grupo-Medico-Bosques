import './bio.css'

function Bio(props) {

  const {
    imageRelatedSource, imageRelatedName,
    imageDoctorSource, imageDoctorName,
    masterName, description, phrase,
  } = props

  return (
    <article className='bio'>
      <section className="gineImgs">
        <figure className="imgRelated"><img src={imageRelatedSource} alt={imageRelatedName} /></figure>
        <figure className="imgDoctor"><img src={imageDoctorSource} alt={imageDoctorName} /></figure>
      </section>
      <section className="gineDoc">
        <h2>{masterName}</h2>
        <h1>{imageDoctorName}</h1>
        <hr />
        {description}
        <h3>{phrase}</h3>
      </section>
    </article>
  )
}

export default Bio
