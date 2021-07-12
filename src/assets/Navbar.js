import React from 'react'
import Logo from '../assets/logo.png'
import Butulinica from '../assets/butulinica.png'
import Allergan from '../assets/allergan.png'
function Navbar() {
  return (
    <nav>
      <div className="bootcamp"><img src={Logo} alt="" /></div>
      <div className="patrocinadores-nav">
        <img src={Butulinica} alt="" />
        <img src={Allergan} alt="" />
      </div>
    </nav>
  )
}

export default Navbar