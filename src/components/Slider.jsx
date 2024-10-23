import React from 'react';

const Slider = () => {
  return (
    <>
      <section id="page3">
        <div className="container">
          <h1 className="headline">How Does It Work?</h1>

          <div className="images">
            <img className="image1" src="images/sida3/pic1.svg" alt="Iphone with spending graph" />
            <img className="image2" src="images/sida3/bild2.svg" alt="Iphone with visa card" />
            <img className="image3" src="images/sida3/pic3.svg" alt="Iphone with latest transactions and balance" />
          </div>

          <div className="bottomtext">
            <h4 className="headlinebottom">Latest transaction history</h4>
            <p className="text">
              Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.<br />
              Arcu sociis tristique quisque hac in consectetur condimentum.
            </p>
          </div>
        </div>
      </section>      
    </>
  );
};

export default Slider;
