import { useEffect } from "react";

export default function FaqMain() {
  const faqs = [
    {
      question: "What services does your design agency offer?",
      answer:
        "Clients often seek to understand the range of design services an agency provides, such as graphic design, web design, branding, and more. We offer a wide range of design services, including graphic design, web design, branding, UI/UX design, and more.",
    },
    {
      question: "What industries or types of clients do you typically work with?",
      answer:
        "This question helps potential clients determine if the agency has experience in their specific industry or with similar projects. Our agency stands out due to our creative expertise, attention to detail, and commitment to delivering designs that not only look great.",
    },
    {
      question: "Can you provide examples of your previous work/portfolio?",
      answer:
        "Yes, we're proud to showcase a portfolio of our previous projects. You can find examples of our work on our website or request a tailored portfolio relevant to your needs. Clients often want to see examples of the agency's previous projects to assess the quality and style.",
    },
    {
      question: "What is your design process like?",
      answer:
        "Explaining the design agency's process from initial concept to final delivery helps clients understand what to expect.",
    },
    {
      question: "How do you handle revisions and feedback during a project?",
      answer:
        "Clients are interested in knowing how the agency manages feedback and makes revisions to ensure the final design meets their expectations. We value client feedback and work closely with you to make sure you're happy with the final design.",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes, we offer ongoing support, maintenance, and updates as needed, ensuring that your design assets and projects remain up to date and functional. Some clients may have urgent projects, so it's important to communicate if the agency can accommodate rush orders.",
    },
  ];

  useEffect(() => {
    // Open/close logic using vanilla JS since no plugin specified
    const items = document.querySelectorAll(".aximo-accordion-item");

    items.forEach((item) => {
      item.addEventListener("click", () => {
        // Close others
        items.forEach((el) => el.classList.remove("open"));
        item.classList.add("open");
      });
    });
  }, []);

  return (
    <div className="section aximo-section-padding3">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            <span className="aximo-title-animation">
              These FAQs help
              <span className="aximo-title-icon">
                <img src="/assets/images/v1/star2.png" alt="star icon" />
              </span>
            </span>
            clients learn about us
          </h2>
        </div>

        <div
          className="aximo-accordion-wrap wow fadeInUpX"
          data-wow-delay="0.1s"
          id="aximo-accordion"
        >
          {faqs.map((faq, i) => (
            <div
              className={`aximo-accordion-item ${i === 0 ? "open" : ""}`}
              key={i}
            >
              <div className="aximo-accordion-header">
                <h3>{faq.question}</h3>
              </div>
              <div className="aximo-accordion-body">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
