import React from "react";

export default function FaqSample() {
  const leftFaqs = [
    {
      question: "What services does agency offer?",
      answer:
        "Clients often seek to understand the range of design services an agency provides, such as graphic design, web design, branding.",
    },
    {
      question: "What is your design process like?",
      answer:
        "Explaining the design agency's process from initial concept to final delivery helps clients understand what to expect.",
    },
    {
      question: "How much does design work cost?",
      answer:
        "The cost of our design services varies depending on the scope of the project. We provide customized quotes after discussing requirements.",
    },
  ];

  const rightFaqs = [
    {
      question: "What's your design process like?",
      answer:
        "Our design process typically involves discovery, concept development, design, revisions based on feedback, and finalization.",
    },
    {
      question: "How do you handle user feedback?",
      answer:
        "We value client feedback and work closely with you to make sure user happy with the final design. We offer a specific number of revisions.",
    },
    {
      question: "Can we see samples of your work?",
      answer:
        "Yes, we're proud to showcase a portfolio of our previous projects. You can find examples of our work on our website or view our portfolio.",
    },
  ];

  return (
    <div className="section aximo-section-padding">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            These FAQs help{" "}
            <span className="aximo-title-animation">
              clients learn about us
              <span className="aximo-title-icon">
                <img src="/assets/images/v1/star2.png" alt="star" />
              </span>
            </span>
          </h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="aximo-accordion-normal-wrap responsive-margin">
              {leftFaqs.map((faq, index) => (
                <div className="aximo-accordion-normal-item" key={index}>
                  <div className="aximo-accordion-normal-icon">
                    <img src="/assets/images/icon/question.svg" alt="icon" />
                  </div>
                  <div className="aximo-accordion-normal-data">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="aximo-accordion-normal-wrap">
              {rightFaqs.map((faq, index) => (
                <div className="aximo-accordion-normal-item" key={index}>
                  <div className="aximo-accordion-normal-icon">
                    <img src="/assets/images/icon/question.svg" alt="icon" />
                  </div>
                  <div className="aximo-accordion-normal-data">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
