import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3 mb-5 mt-5" id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 m-3">
        <div className="col-6">
            <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1> 

            <input className="mt-3 mb-3" placeholder="Eg. how do I activate F&O"/> <br />
            <a href="">Track account opening</a> 
            <a href="">Track segment activation</a> 
            <a href="">Intraday margins </a> 
            <a href="">Kite user manual</a> 
        </div>
        <div className="col-6">
            <h1>Featured</h1>
            <ol>
                <li><a href="">Surveillance measure on scrips - August 2024</a></li>
                <li><a href="">Latest Intraday leverages and Square-off timings</a></li>
            </ol>
            
 
            
        </div>
      </div>
    </section>
  );
}

export default Hero;
