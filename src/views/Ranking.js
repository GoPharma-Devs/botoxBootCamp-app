import React from "react";
import Navbar from "../components/Navbar";
import TopTres from "../components/TopTres";
import RankingGeneral from "../components/RankingGeneral";
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer";


function Ranking() {
  //estado de nombre

  

  return (
    <>
      <Navbar />
      <Fade>
        <section className="ranking">
          <div className="contenedor">
            {/* TopTres */}
            <TopTres />

            <RankingGeneral />
          </div>
        </section>
      </Fade>
      <br />
      <Footer />
    </>
  );
}

export default Ranking;
