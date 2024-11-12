import React, { useState } from 'react';

const Contacts = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!/^[a-zA-Z\s-]+$/.test(fullName)) {
      newErrors.fullName = 'Full name can only contain letters, spaces, and hyphens.';
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!specialist) {
      newErrors.specialist = 'Please choose an option.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {      
      setFullName('');
      setEmail('');
      setSpecialist('');
      setErrors({});
    }
  };

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
                  Please feel free to drop us a line. We will respond as soon as possible.
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
              <form className="consultation-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="full-name">Full name</label>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                  {errors.fullName && <p className="error">{errors.fullName}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="specialist">Specialist</label>
                  <select
                    id="specialist"
                    name="specialist"
                    value={specialist}
                    onChange={(e) => setSpecialist(e.target.value)}
                    required
                  >
                    <option value="">Select a specialist</option>
                    <option value="doctor">Doctor</option>
                    <option value="therapist">Therapist</option>
                    <option value="counselor">Counselor</option>
                    <option value="orthopedist">Orthopedist</option>
                  </select>
                  {errors.specialist && <p className="error">{errors.specialist}</p>}
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
