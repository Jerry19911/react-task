import React from 'react';

const Map = () => {
  return (
    <section id="page8">
      <div className="container">
        <div className="content">
          <div className="leftcontent">
            <img className="picture" src="images/map.svg" alt="Google maps view" />
          </div>
          <div className="rightcontent">
            <div className="card">
              <h2 className="headline">Medical Center 1</h2>
              <div className="contact">
                <div className="icon">
                  <i className="fa-regular fa-location-dot"></i>
                </div>
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
              </div>
              <div className="contact">
                <div className="icon">
                  <i className="fa-light fa-phone-volume"></i>
                </div>
                <p>(406) 555-0120</p>
              </div>
              <div className="contact">
                <div className="icon">
                  <i className="fa-sharp fa-light fa-clock"></i>
                </div>
                <p>
                  <strong>Mon - Fri:</strong> 9:00 am - 22:00 pm<br />
                  <strong>Sat - Sun:</strong> 9:00 am - 20:00 pm
                </p>
              </div>
            </div>

            <div className="card">
              <h2 className="headline">Medical Center 2</h2>
              <div className="contact">
                <div className="icon">
                  <i className="fa-regular fa-location-dot"></i>
                </div>
                <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
              </div>
              <div className="contact">
                <div className="icon">
                  <i className="fa-light fa-phone-volume"></i>
                </div>
                <p>(406) 544-0123</p>
              </div>
              <div className="contact">
                <div className="icon">
                  <i className="fa-sharp fa-light fa-clock"></i>
                </div>
                <p>
                  <strong>Mon - Fri:</strong> 9:00 am - 22:00 pm<br />
                  <strong>Sat - Sun:</strong> 9:00 am - 20:00 pm
                </p>
              </div>
              <img className="socials" src="images/socials.svg" alt="Google maps view" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
