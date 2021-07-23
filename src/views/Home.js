import React from 'react';
import Logo from '../assets/logo.png'
import Butulinica from '../assets/butulinica.png'
import Allergan from '../assets/allergan.png'
import Boton from '../assets/boton.png'
import Fade from 'react-reveal/Fade';

function Home() {
  const handleClick = () => {
    window.open("https://campus.botoxbootcamp.com.mx/acceso.php", "_self");
  };





  return (

    <Fade>
      <section className="home">
        <div className="contenedor-logo">
          <img className="logo" src={Logo} alt="Botox-BootCamp 2021" />
        </div>
        <button className="btn-flotante" onClick={handleClick} ><img src={Boton} target="_self" alt="" /></button>

        <div className="contenedor-patrocinadores botones-l">
          <img src={Butulinica} alt="Botox-BootCamp 2021 Botox" />
          <img src={Allergan} alt="Botox-BootCamp 2021" />
        </div>

        <div className="contenedor-legales">
          <small>MATERIAL DE ENTRENAMIENTO PARA EXCLUSIVO USO INTERNO DE ALLERGAN AESTHETICS – PROHIBIDA SU REPRODUCCIÓN
          </small>
          <br />
          <small>©2021 Allergan. Todos los derechos reservados. Todas las marcas son propiedad de sus respectivos dueños</small>
          <br />
          <small>BOTOX® No.Reg.119M93 SSA IV</small>
          <br />
          <small>CODIGO VEEVA VAULT xxxxxxx</small>
          <br />
          <small>Agosto 2021</small>
        </div>

      </section>

    </Fade>
  )
}

export default Home
