import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'
import Butulinica from '../assets/butulinica.png'
import Allergan from '../assets/allergan.png'
import Boton from '../assets/boton.png'
function Home() {
  return (
    <section className="home">
      <div className="contenedor-logo">
        <img className="logo" src={Logo} alt="Botox-BootCamp 2021" />
      </div>
      <Link
      className="btn-flotante"
        to={{ pathname: "/login"}}> <img src={Boton} alt="" /></Link>
      <div className="contenedor-patrocinadores">
        <img src={Butulinica} alt="Botox-BootCamp 2021" />
        <img  src={Allergan} alt="Botox-BootCamp 2021" />
      </div>
    </section>
  )
}

export default Home
