import React from 'react'
//import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'
import Butulinica from '../assets/butulinica.png'
import Allergan from '../assets/allergan.png'
import Boton from '../assets/boton.png'
function Home() {
  const handleClick = () => {
    window.open("https://campus.botoxbootcamp.com.mx/acceso.php","_self");
  };
  return (
    <section className="home">
      <div className="contenedor-logo">
        <img className="logo" src={Logo} alt="Botox-BootCamp 2021" />
      </div>
      <button  className="btn-flotante" onClick={handleClick} ><img src={Boton} target="_self" alt="" /></button>
      <div className="contenedor-patrocinadores">
        <img src={Butulinica} alt="Botox-BootCamp 2021" />
        <img  src={Allergan} alt="Botox-BootCamp 2021" />
      </div>
    </section>
  )
}

export default Home
