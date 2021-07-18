import React from "react";
import Navbar from "../components/Navbar";
import Cookies from "universal-cookie";
import TopTres from "../components/TopTres"
import RankingGeneral from "../components/RankingGeneral";

const cookies = new Cookies();
function Ranking() {

    //estado de nombre
    

  //const [place, setPlace] = [1,2,3]
  console.log("message " + cookies.get("message"));
  console.log("nombre " + cookies.get("name"));
  

  


  return (
    <>
      <Navbar />
      <section className="ranking">
        <div className="contenedor">
        {/* TopTres */}
        <TopTres/>
          <br />
          <RankingGeneral/>
        </div>
      </section>
    </>
  );
}

export default Ranking;
