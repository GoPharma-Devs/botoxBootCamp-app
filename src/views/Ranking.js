import React from 'react'
import Navbar from '../components/Navbar'
import Logo from '../assets/logo.png'
function Ranking() {
  return (
    <>
    <Navbar/>
    <section className="ranking">
      <div className="contenedor">
        <header>
          <h1>Top 10 PLayers</h1>
        <div className="top-tres">
        
        <div className="col segundo-lugar">
      <img src={Logo} alt="" />
            <p className="name">FS LM</p>
            <p className="place">2nd</p>
            <div className="puntos">
              <p className="puntos-numeros"> <span>XXX PUNTOS</span></p>
            </div>
            </div>
            <div className="col primer-lugar">
              <img src={Logo} alt="" />
            <p className="name">FS LM</p>
            <p className="place first">1st</p>
            <div className="puntos">
              <p className="puntos-numeros"> <span>XXX PUNTOS</span></p>
            </div>
            </div>
            <div className="col tercer-lugar">
              <img src={Logo} alt="" />
            <p className="name">FS LM</p>
            <p className="place">3rd</p>
            <div className="puntos">
              <p className="puntos-numeros"> <span>XXX PUNTOS</span></p>
            </div>
            </div>
        </div>
        </header>
<br />
        <div className="ranking-general">
          <ul>
            <li>
            <div className="grupo"><p className="place">4th</p>
            <img src={Logo} alt="" /></div>
            <p className="name">FS LM</p>
           
            <div className="puntos">
              <p className="puntos-numeros"> <span>XXX PUNTOS</span></p>
            </div>
              </li>
              <li>
            <div className="grupo">
            <p className="place">5th</p>
            <img src={Logo} alt="" />
            </div>
            <p className="name">FS LM</p>
           
            <div className="puntos">
              <p className="puntos-numeros"> <span>XXX PUNTOS</span></p>
            </div>
              </li>
              <li>
         <div className="grupo">   <p className="place">6th</p>
            <img src={Logo} alt="" /></div>
            <p className="name">FS LM</p>
           
            <div className="puntos">
              <p className="puntos-numeros"> <span>XXX PUNTOS</span></p>
            </div>
              </li>
              <li>
            <div className="grupo"><p className="place">7th</p>
            <img src={Logo} alt="" /></div>
            <p className="name">FS LM</p>
           
            <div className="puntos">
              <p className="puntos-numeros"> <span>XXX PUNTOS</span></p>
            </div>
              </li>
              <li>
           <div className="grupo"> <p className="place">8th</p>
            <img src={Logo} alt="" /></div>
            <p className="name">FS LM</p>
           
            <div className="puntos">
              <p className="puntos-numeros"> <span>XXX PUNTOS</span></p>
            </div>
              </li>
              <li>
            <div className="grupo"><p className="place">9th</p>
            <img src={Logo} alt="" /></div>
            <p className="name">FS LM</p>
           
            <div className="puntos">
              <p className="puntos-numeros"> <span>XXX PUNTOS</span></p>
            </div>
              </li>
              <li>
            <div className="grupo"><p className="place">10th</p>
            <img src={Logo} alt="" /></div>
            <p className="name">FS LM</p>
           
            <div className="puntos">
              <p className="puntos-numeros"> <span>XXX PUNTOS</span></p>
            </div>
              </li>
            
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}

export default Ranking
