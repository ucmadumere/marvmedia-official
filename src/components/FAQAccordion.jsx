import { useState } from "react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0); // Start with the first item open

  const items = [
    {
      title: "Client-Centric",
      content:
        "Transparent communication, unwavering quality, understanding unique needs, and delivering tailored solutions.",
    },
    {
      title: "Team Of Experts",
      content:
        "Seasoned experts constantly innovating in social media management, content creation, and branding with a track record of delivering outstanding results.",
    },
    {
      title: "Proven Results",
      content:
        "Consistently delivered outstanding results for businesses across various industries, emphasizing the importance of online presence in the digital age.",
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="section">
      <div className="container">
        <div className="aximo-faq-wrap">
          <div className="row">
            <div className="col-lg-7 d-flex align-items-center">
              <div className="aximo-default-content">
                <h2>
                  <span className="aximo-title-animation">
                    Why choose us
                    <span className="aximo-title-icon">
                      {/* <img src="/assets/images/v1/star2.png" alt="" /> */}
                    </span>
                  </span>
                  {/* working processes */}
                </h2>
                <p>
                  We combine transparent communication, unwavering quality, and
                  a deep understanding of unique needs to deliver tailored
                  solutions—driven by seasoned experts who consistently innovate
                  in social media, content creation, and branding, with a proven
                  track record of delivering exceptional results across
                  industries in today’s digital landscape.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="aximo-accordion-wrap" id="aximo-accordion">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`aximo-accordion-item ${
                      openIndex === index ? "open" : ""
                    }`}
                  >
                    <div
                      className="aximo-accordion-header"
                      onClick={() => toggleItem(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <h3>{item.title}</h3>
                    </div>
                    {openIndex === index && (
                      <div className="aximo-accordion-body">
                        <p>{item.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
