import React from 'react';

const Contacts = () => {
  return (
    <section id="page7">

      <div className="container">
        <div className="content">
          <div className="leftcontent">
            <h1>Contact us</h1>

            <div className="boxes">
              <div className="iconcircle">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="boxtext">
                <h2 className="boxheadline">Email us</h2>
                <p>
                  Please feel free to drop us a line. We will respond as soon
                  as possible.
                </p>
                <div className="bottomlink">
                  <a className="box-nav-link" href="#">
                    Leave a message
                  </a>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>

            <div className="boxes">
              <div className="iconcircle">
                <i className="fa-thin fa-user-plus"></i>
              </div>
              <div className="boxtext">
                <h2 className="boxheadline">Careers</h2>
                <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                <div className="bottomlink">
                  <a className="box-nav-link" href="#">
                    Send an application
                  </a>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="rightcontent">
            <div className="card">
              <h2>Get Online Consultation</h2>
              <form className="consultation-form">
                <div className="form-group">
                  <label htmlFor="full-name">Full name</label>
                  <input type="text" id="full-name" name="full-name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="specialist">Specialist</label>
                  <select id="specialist" name="specialist" required>
                    <option value="">Select a specialist</option>
                    <option value="doctor">Doctor</option>
                    <option value="therapist">Therapist</option>
                    <option value="counselor">Counselor</option>
                    <option value="orthopedist">Orthopedist</option>
                  </select>
                </div>
                <button type="submit" className="btn-submit">
                  Make an appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
