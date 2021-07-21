import React, { useEffect, useState } from "react";

import axios from "axios";

function TopTres() {


 

  const [top, setTop] = useState([])
  //se pintan solo tres jugadores
  var topTresRefactor = top.slice(0,3)

  useEffect(() => {

    var config = {
      method: "get",
      //la consulta es del total de jugaodres
      url: "https://botoxb-be.herokuapp.com/api/players",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {

        setTop(response.data)
        //console.log(response.data)
        //console.log((JSON.stringify(...response.data)))

      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])


  return (
    
    <header>
      <h1>Top 10 PLayers</h1>

      <div className="top-tres">
        
        {topTresRefactor.map(top => 
        
        <div key={top._id} className="col">
          
          <img src={top.thumbnail} alt="" />
          <p className="name">{top.username}</p>
          <p className="place">{top.place}1st</p>
          <div className="puntos">
            <p className="puntos-numeros">
              {" "}
              <span>{top.score} PUNTOS</span>
            </p>
          </div>

        </div>
        
        )}

      </div>
    </header>

  )
}

export default TopTres
