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
              <img src="images/app-store2.svg" alt="App store" />
              <div className="btn-text">
                <span className="small-text">Download on the</span>
                <span className="large-text">App Store</span>
              </div>
            </a>
            <a className="btn-download-app" href="#">
              <img src="images/google-play2.svg" alt="Google play" />
              <div className="btn-text">
                <span className="small-text">Get it on</span>
                <span className="large-text">Google Play</span>
              </div>
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
