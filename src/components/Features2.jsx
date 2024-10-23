import React from 'react';

const Features2 = () => {
  return (
    <section id="page4">
      <div className="container">
        <div className="topcontent">
          <div className="texttop">
            <h2 className="headlinetop">
              Make your money<br />transfer simple and clear
            </h2>
            <div className="circlecheck">
              <i className="fa-light fa-circle-check"></i>
              <span className="text">Banking transactions are free for you</span>
            </div>
            <div className="circlecheck">
              <i className="fa-light fa-circle-check"></i>
              <span className="text">No monthly cash commission</span>
            </div>
            <div className="circlecheck">
              <i className="fa-light fa-circle-check"></i>
              <span className="text">Manage payments and transactions online</span>
            </div>

            <a id="Learn-more1" href="#" className="learnmore">
              <span>Learn more</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="images-top">
            <img className="imagegraph" src="images/sida4/graph.svg" alt="Iphone with spending graph" />
            <img className="imagesendmoney" src="images/sida4/sendmoneyto.svg" alt="Choose a contact to send money to" />
          </div>
        </div>

        <div className="container2">
          <div className="bottomcontent">
            <div className="images-bottom">
              <img className="imagecontacts" src="images/sida4/contacts.svg" alt="Iphone your contacts" />
              <img className="imagevisa" src="images/sida4/card.svg" alt="Digital visacard" />
            </div>

            <div className="textbottom">
              <h2 className="headlinebottom">Receive payment from<br />international bank details</h2>
              <div className="card">
                <div className="onlinepayments">
                  <div className="icon-wrapper">
                    <i className="fa-thin fa-credit-card icons"></i>
                  </div>
                  <p className="text" id="textbox1">
                    Manage your payments online. Mollis congue egestas egestas fermentum fames.
                  </p>
                </div>

                <div className="wallet">
                  <div className="icon-wrapper">
                    <i className="fa-thin fa-wallet icons"></i>
                  </div>
                  <p className="text" id="textbox2">
                    A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.
                  </p>
                </div>
              </div>

              <a id="Learn-more2" href="#" className="learnmore">
                <span>Learn more</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
