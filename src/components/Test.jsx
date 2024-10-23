import React from 'react';

const Test = () => {
  return (
    <section id="page5">
      <div className="container">
        <h1 className="headline">Clients are<br />Loving Our App</h1>

        <div className="cards">
          <div className="qoute">
            <p className="qoutecontent">“</p>
          </div>
          <div className="rating">★★★★☆</div>
          <p className="text">
            Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
          </p>
          <div className="profile">
            <img className="picture" src="images/sida5/Fannie.svg" alt="Fannie Summers profile avatar." />
            <div className="profile-info">
              <p className="name">Fannie Summers</p>
              <p className="title">Designer</p>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="qoute">
            <p className="qoutecontent">“</p>
          </div>
          <div className="rating">★★★★★</div>
          <p className="text">
            Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.
          </p>
          <div className="profile">
            <img className="picture" src="images/sida5/Albert.svg" alt="Albert Flores profile avatar." />
            <div className="profile-info">
              <p className="name">Albert Flores</p>
              <p className="title">Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
