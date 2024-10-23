import React from 'react';

const Faq = () => {
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
          <ul>
            <li className="chevron">
              <span className="Faqheadline">Is any of my personal information stored in the App?</span>
              <span className="btn-chevron">
                <i className="fa-regular fa-chevron-down"></i>
              </span>
            </li>

            <li className="chevron">
              <div className="answer">
                <span className="Faqheadline">What formats can I download my transaction history in?</span>
                <p className="faqanswer">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit.</p>
              </div>
              <span className="btn-chevronup">
                <i className="fa-regular fa-chevron-up"></i>
              </span>
            </li>

            <li className="chevron">
              <span className="Faqheadline">Can I schedule future transfers?</span>
              <span className="btn-chevron">
                <i className="fa-regular fa-chevron-down"></i>
              </span>
            </li>

            <li className="chevron">
              <span className="Faqheadline">When can I use Banking App services?</span>
              <span className="btn-chevron">
                <i className="fa-regular fa-chevron-down"></i>
              </span>
            </li>

            <li className="chevron">
              <span className="Faqheadline">Can I create my own password that is easy for me to remember?</span>
              <span className="btn-chevron">
                <i className="fa-regular fa-chevron-down"></i>
              </span>
            </li>

            <li className="chevron">
              <span className="Faqheadline">What happens if I forget or lose my password?</span>
              <span className="btn-chevron">
                <i className="fa-regular fa-chevron-down"></i>
              </span>
            </li>
          </ul>
        </div>

        <div className="contentbottom">
          <div className="contentbottomleft">
            <div className="bellicon">
              <i className="fa-sharp fa-solid fa-bell"></i>
              <div className="circle"></div>
            </div>
            <h4 className="newsletter">Subscribe to our newsletter to stay informed about latest updates</h4>
          </div>
          <div className="enteremail">
            <form action="" method="get">
              <div className="input-wrapper">
                <i className="fa-thin fa-envelope icon"></i>
                <input type="email" placeholder="Your Email" />
              </div>
              <button className="btn-subscribe">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
