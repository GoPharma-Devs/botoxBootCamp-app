import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Logo from "../assets/logo.png";
import Cookies from "universal-cookie";

import axios from "axios";
const cookies = new Cookies();
function Ranking() {

    //estado de nombre
     const [nombre, setNombre] = useState("");

  //const [place, setPlace] = [1,2,3]
  console.log("message " + cookies.get("message"));
  console.log("name " + cookies.get("name"));

  var config = {
    method: "get",
    url: "https://botoxb-be.herokuapp.com/api/players",
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios(config)
    .then(function (response) {
      //console.log(JSON.stringify(response.data));
      setNombre(JSON.stringify(...response.data))
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });



  return (
    <>
      <Navbar />
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
                  <p className="puntos-numeros">
                    {" "}
                    <span>XXX PUNTOS</span>
                  </p>
                </div>
              </div>
              <div className="col primer-lugar">
                <img src={Logo} alt="" />
                <p className="name">FS LM</p>
                <p className="place first">1st</p>
                <div className="puntos">
                  <p className="puntos-numeros">
                    {" "}
                    <span>XXX PUNTOS</span>
                  </p>
                </div>
              </div>
              <div className="col tercer-lugar">
                <img src={Logo} alt="" />
                <p className="name">FS LM</p>
                <p className="place">3rd</p>
                <div className="puntos">
                  <p className="puntos-numeros">
                    {" "}
                    <span>XXX PUNTOS</span>
                  </p>
                </div>
              </div>
            </div>
          </header>
          <br />
          <div className="ranking-general">
            <ul>
              <li>
                <div className="grupo">
                  <p className="place">4th</p>
                  <img src={Logo} alt="" />
                </div>
                <p className="name">FS LM</p>

                <div className="puntos">
                  <p className="puntos-numeros">
                    {" "}
                    <span>XXX PUNTOS</span>
                  </p>
                </div>
              </li>
              <li>
                <div className="grupo">
                  <p className="place">5th</p>
                  <img src={Logo} alt="" />
                </div>
                <p className="name">FS LM</p>

                <div className="puntos">
                  <p className="puntos-numeros">
                    {" "}
                    <span>XXX PUNTOS</span>
                  </p>
                </div>
              </li>
              <li>
                <div className="grupo">
                  {" "}
                  <p className="place">6th</p>
                  <img src={Logo} alt="" />
                </div>
                <p className="name">FS LM</p>

                <div className="puntos">
                  <p className="puntos-numeros">
                    {" "}
                    <span>XXX PUNTOS</span>
                  </p>
                </div>
              </li>
              <li>
                <div className="grupo">
                  <p className="place">7th</p>
                  <img src={Logo} alt="" />
                </div>
                <p className="name">FS LM</p>

                <div className="puntos">
                  <p className="puntos-numeros">
                    {" "}
                    <span>XXX PUNTOS</span>
                  </p>
                </div>
              </li>
              <li>
                <div className="grupo">
                  {" "}
                  <p className="place">8th</p>
                  <img src={Logo} alt="" />
                </div>
                <p className="name">FS LM</p>

                <div className="puntos">
                  <p className="puntos-numeros">
                    {" "}
                    <span>XXX PUNTOS</span>
                  </p>
                </div>
              </li>
              <li>
                <div className="grupo">
                  <p className="place">9th</p>
                  <img src={Logo} alt="" />
                </div>
                <p className="name">FS LM</p>

                <div className="puntos">
                  <p className="puntos-numeros">
                    {" "}
                    <span>XXX PUNTOS</span>
                  </p>
                </div>
              </li>
              <li>
                <div className="grupo">
                  <p className="place">10th</p>
                  <img src={Logo} alt="" />
                </div>
                <p className="name">FS LM</p>

                <div className="puntos">
                  <p className="puntos-numeros">
                    {" "}
                    <span>XXX PUNTOS</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ranking;
