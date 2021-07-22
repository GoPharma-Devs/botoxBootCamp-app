import React from 'react';
import Navbar from "../components/Navbar";
import Cookies from "universal-cookie";
import TopTres from "../components/TopTres"
import RankingGeneral from "../components/RankingGeneral";
import Fade from 'react-reveal/Fade';
import Footer from "../components/Footer"
const cookies = new Cookies();

function Ranking() {

    //estado de nombre
    

  //const [place, setPlace] = [1,2,3]
  console.log("message " + cookies.get("message"));
  console.log("nombre " + cookies.get("name"));
  

 



  return (
  
      <>
      <Navbar />
      <Fade>
      <section className="ranking">
        <div className="contenedor">
        {/* TopTres */}
        <TopTres/>
         
          <RankingGeneral/>
        </div>
        
      </section>
     
    </Fade>
    <br />
    <Footer/>
      </>
  );
}

export default Ranking;
