import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <section className="ErrorPage">
      <div className="contenedor">
        <h1>Error 404</h1>
        <p>Pagína no encontrada</p>
        <br />
        <Link className="btn-flotante" to="/">Regresar al inicio</Link>
      </div>
    </section>
  )
}

export default Error
