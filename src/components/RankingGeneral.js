import React, { useEffect, useState } from "react";
import Zoom from 'react-reveal/Zoom';
import axios from "axios";

function RankingGeneral() {



const [rank, setRank] = useState([])
var ranking4ton = rank.slice(3,11)


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

      setRank(response.data)
      console.log(response.data)
      //console.log((JSON.stringify(...response.data)))

    })
    .catch(function (error) {
      console.log(error);
    });
}, [])






  return (
    <Zoom>
    <div className="ranking-general">
    <ul>

      {ranking4ton.map(rank =>
        <li key={rank._id}>
        <div className="grupo">
        <p className="place">{rank.place}2nd</p>
          <img src={rank.thumbnail} alt="" />
        </div>
        <p className="name">{rank.username}</p>

        <div className="puntos">
          <p className="puntos-numeros">
            {" "}
            <span>{rank.score} PUNTOS</span>
          </p>
        </div>
      </li>
        
        
        
        )}
{/* 
      <li>
        <div className="grupo">
          <p className="place">4th</p>
          <img src={UserIcon} alt="" />
        </div>
        <p className="name">FS LM</p>

        <div className="puntos">
          <p className="puntos-numeros">
            {" "}
            <span>XXX PUNTOS</span>
          </p>
        </div>
      </li> */}

      
    </ul>
  </div>
  </Zoom>
  )
}

export default RankingGeneral
