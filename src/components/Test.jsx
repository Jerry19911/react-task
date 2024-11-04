import React, { useEffect, useState } from 'react';

const CustomerFeedback = () => {
  const [feedbackList, updateFeedbackList] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const getCustomerFeedback = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        });
        if (!response.ok) {
          throw new Error(`Failed to load data: ${response.status}`);
        }
        const data = await response.json();
        updateFeedbackList(data);
      } catch {
        setFetchError('Something went wrong, please try again.');
      }
    };
    getCustomerFeedback();
  }, []);

  return (
    <section id="page5">
      <div className="container">
        <h1 className="headline">Clients are<br />Loving Our App</h1>
        
        {fetchError && <div className="error-message">{fetchError}</div>}
        
        {feedbackList.length > 0 ? (
          feedbackList.map((feedback) => (
            <div className="cards" key={feedback.id}>
              <div className="quote">
                <p className="quotecontent">“</p>
              </div>
              <div className="rating">
                {'★'.repeat(feedback.starRating) + '☆'.repeat(5 - feedback.starRating)}
              </div>
              <p className="text">{feedback.comment}</p>
              <div className="profile">
                <img
                  className="picture"
                  src={feedback.avatarUrl}
                  alt={`Profile picture of ${feedback.author}`}
                />
                <div className="profile-info">
                  <p className="name">{feedback.author}</p>
                  <p className="title">{feedback.jobRole}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          !fetchError && <p>No testimonials available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default CustomerFeedback;
