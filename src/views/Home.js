import React from 'react'
//import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'
import Butulinica from '../assets/butulinica.png'
import Allergan from '../assets/allergan.png'
import Boton from '../assets/boton.png'
import Fade from 'react-reveal/Fade';

function Home() {
  const handleClick = () => {
    window.open("https://campus.botoxbootcamp.com.mx/acceso.php","_self");
  };
  return (
    <Fade>
    <section className="home">
      <div className="contenedor-logo">
        <img className="logo" src={Logo} alt="Botox-BootCamp 2021" />
      </div>
      <button  className="btn-flotante" onClick={handleClick} ><img src={Boton} target="_self" alt="" /></button>
     
      <div className="contenedor-patrocinadores botones-l">
        <img src={Butulinica} alt="Botox-BootCamp 2021 Botox" />
        <img  src={Allergan} alt="Botox-BootCamp 2021" />
      </div>
    </section>
    </Fade>
  )
}

export default Home
