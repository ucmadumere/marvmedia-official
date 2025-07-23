import React from 'react'
import CallToActionButton from './CallToActionButton';

export default function Testimonial() {
  return (
    <>
      <div className="section aximo-section-padding3">
        <div className="container">
          <div className="aximo-section-title center">
            <h2>
              Clients are always{" "}
              <span className="aximo-title-animation">
                satisfied with us
                <span className="aximo-title-icon">
                  <img src="/assets/images/v1/star2.png" alt="" />
                </span>
              </span>
            </h2>
          </div>
          <div className="row">
            {[
              {
                name: "William Jack",
                title: "Adline Clothing (Fashion Brand)",
                img: "t_thumb1.png",
                heading: "Super customer service!",
                text: `Transformed online presence, gained over 9,000 new followers, and saw an impressive increase of 15% in sales and engagement in two years.`,
                delay: "0.1s",
              },
              {
                name: "Smith Align",
                title: "Young & Pure (AEYG) (NGO)",
                img: "t_thumb2.png",
                heading: "Exceptional creativity and vision",
                text: `Content creation services were invaluable, handling three documentary sessions and managing YouTube content production, leading to attracting new members, volunteers, and forging partnerships.`,
                delay: "0.2s",
              },
              {
                name: "Milano Joe",
                title: "My Occasions (Event Management Company)",
                img: "t_thumb3.png",
                heading: "Innovative and professional",
                text: `Instrumental partner, assisting with social media setup, branding, and essential digital marketing strategies, pivotal in establishing their presence in the events industry.`,
                delay: "0.3s",
              },
            ].map((testimonial, index) => (
              <div className="col-lg-6" key={index}>
                <div
                  className="aximo-testimonial-wrap wow fadeInUpX"
                  data-wow-delay={testimonial.delay}
                >
                  <div className="aximo-testimonial-rating">
                    <ul>
                      {[...Array(5)].map((_, i) => (
                        <li key={i}>
                          <i className="icon-star"></i>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="aximo-testimonial-data">
                    <h3>{testimonial.heading}</h3>
                    <p>{testimonial.text}</p>
                  </div>
                  <div className="aximo-testimonial-author">
                    {/* <div className="aximo-testimonial-author-thumb">
                      <img
                        src={`/assets/images/v1/${testimonial.img}`}
                        alt={testimonial.name}
                      />
                    </div> */}
                    <div className="aximo-testimonial-author-data">
                      <h4>
                        {/* {testimonial.name}  */}
                        <span>{testimonial.title}</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <CallToActionButton /> 
          {/* come back to this */}
        </div>
      </div>
    </>
  );
}
