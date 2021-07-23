import React, { useEffect, useState } from "react";
import Zoom from 'react-reveal/Zoom';
import axios from "axios";

function RankingGeneral() {



const [rank, setRank] = useState([])
var ranking4ton = rank.slice(3,100)


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
      //console.log(response.data)
      //console.log((JSON.stringify(...response.data)))
      
     
    })
    .catch(function (error) {
      console.log(error);
    });
}, [])

function ordinal_suffix_of(i) {
  var j = i % 10,
      k = i % 100;
  if (j === 1 && k !== 11) {
      return i + "st";
  }
  if (j === 2 && k !== 12) {
      return i + "nd";
  }
  if (j === 3 && k !== 13) {
      return i + "rd";
  }
  return i + "th";
}


  function putEmoji(i) {
    if (i <= 10) {
      return (i = "✨");
    } else if (i <= 20) {
      return (i = "🐝");
    } else if (i <= 30) {
      return (i = "🐸");
    } else if (i <= 40) {
      return (i = "🤨");
    } else if (i <= 50) {
      return (i = "🙀");
    }
  }

  
  //console.log(`lugares ranking general: ${place4ton}`)

  return (
    <Zoom>
      <div className="ranking-general">
        <ul>
          {ranking4ton.map((rank, index) => (
            <li key={rank._id}>
              <div className="grupo">
                <p>{putEmoji(index + 4)}</p>
                <p className="place">{ordinal_suffix_of(index + 4)}</p>
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
          ))}
        </ul>
      </div>
    </Zoom>
  );
}

export default RankingGeneral
