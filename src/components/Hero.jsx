import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="headline">
          <h1>Manage All Your Money in One App</h1>
        </div>
        <div className="content">
          <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
          <div className="buttons">
            <a className="btn-download-app" href="#">
              <img src="images/app-store.svg" alt="App store" />
            </a>
            <a className="btn-download-app" href="#">
              <img src="images/google-play.svg" alt="Google play" />
            </a>
          </div>

          <a href="#" className="discover-more">
            <span className="btn-circle">
              <i className="fa-regular fa-chevron-down"></i>
            </span>
            <span>Discover more</span>
          </a>
        </div>
        <div className="images">
          <img className="img-back" src="images/Graph.svg" alt="Iphone my budget" />
          <img className="img-front" src="images/visakort.svg" alt="Your cards" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
