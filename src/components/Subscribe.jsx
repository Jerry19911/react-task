import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = 'Please input a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setEmail('');
      setErrors({});
    }
  };

  return (
    <div className="contentbottom">
      <div className="contentbottomleft">
        <div className="bellicon">
          <i className="fa-sharp fa-solid fa-bell"></i>
          <div className="circle"></div>
        </div>
        <h4 className="newsletter">Subscribe to our newsletter to stay informed about latest updates</h4>
      </div>
      <div className="enteremail">
        <form onSubmit={handleSubscribe} noValidate>
          <div className="input-wrapper">
            <i className="fa-thin fa-envelope icon"></i>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}
          <button type="submit" className="btn-subscribe">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
