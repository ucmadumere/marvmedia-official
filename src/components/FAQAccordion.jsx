import { useState } from "react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0); // Start with the first item open

  const items = [
    {
      title: "01/ Project idea",
      content:
        "The process starts with a detailed discussion with the client to understand their idea & goals.",
    },
    {
      title: "02/ Brainstorming",
      content:
        "Brainstorming is a group creativity technique in which members attempt to find a conclusion.",
    },
    {
      title: "03/ Launch",
      content:
        "The completed design assets or final product are delivered with necessary documentation.",
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
                    Our high-quality
                    <span className="aximo-title-icon">
                      <img src="/assets/images/v1/star2.png" alt="" />
                    </span>
                  </span>
                  working processes
                </h2>
                <p>
                  We focus at every stage on effective communication and collaboration between
                  the client and ensuring that the final design meets the client's objectives
                  and expectations.
                </p>
                <p>
                  It is important to note that these are simplified steps, and the actual work
                  process may vary depending on the complexity of the project.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="aximo-accordion-wrap" id="aximo-accordion">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`aximo-accordion-item ${openIndex === index ? "open" : ""}`}
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
