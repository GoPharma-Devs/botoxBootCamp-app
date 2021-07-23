import React from "react";
import { Link } from "react-router-dom";
function FailRegistro() {
  return (
    <section className="fail-registro">
      <h1>Ups algo salio mal</h1>
      <p>Contactanos para poder ayudarte</p>

      <Link href="mailto:contacto@botox.com">contacto@botox.com</Link>
      <br />
      <Link className="btn-flotante" to="/">
        Regresar al inicio
      </Link>
    </section>
  );
}

export default FailRegistro;
