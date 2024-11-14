import React, { useEffect, useState } from 'react';
import Subscribe from './Subscribe';

const FaqSection = () => {
  const [faqItems, updateFaqItems] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const getFaqItems = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
        if (!response.ok) throw new Error('Something went wrong, please try again.');
        const data = await response.json();
        updateFaqItems(data);
      } catch (error) {
        setFetchError(error.message);
      }
    };
    getFaqItems();
  }, []);

  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section id="page6">
      <div className="container">
        <div className="left-content">
          <h2 className="headline">Any questions?<br />Check out the FAQs</h2>
          <p className="text">Still have unanswered questions and need to get<br />in touch?</p>

          <div className="boxes">
            <div className="box">
              <i className="fa-solid fa-phone-volume"></i>
              <p>Still have questions?</p>
              <a id="phone" href="#" className="contactus">
                <span>Contact us</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="box">
              <i className="fa-regular fa-comment-dots"></i>
              <p>Don't like phone calls?</p>
              <a id="chat" href="#" className="contactus">
                <span>Contact us</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="right-content">
          {fetchError && <p className="error-message">{fetchError}</p>}
          <ul className="faq-list">
            {faqItems.map((item) => (
              <li key={item.id} className="chevron" onClick={() => toggleItem(item.id)}>
                <div className="chevron-header">
                  <span className="Faqheadline">{item.title}</span>
                  <span className="btn-chevron">
                    <i className={`fa-regular ${activeItem === item.id ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </span>
                </div>
                {activeItem === item.id && (
                  <div className="answer">
                    <p className="faqanswer">{item.content}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <Subscribe />
      </div>
    </section>
  );
};

export default FaqSection;
