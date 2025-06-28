import { useEffect } from "react";

export default function FaqMain() {
  const faqs = [
    {
      question: "What does Marv Media do?",
      answer:
        "We're a full-service creative media agency offering social media management, content creation, branding,digital marketing, tech support, and business development services tailored for African businesses and creatives.",
    },
    {
      question: "How can I work with Marv Media?",
      answer:
        "Start by booking a free 30-minute call via our contact page. We?ll learn about your needs and recommend the right service or package.",
    },
    {
      question: "Do you offer custom packages?",
      answer:
        "Yes! We understand every brand is unique. Beyond our core packages, we tailor custom strategies based on your goals and budget.",
    },
    {
      question: "What's included in the content creation services?",
      answer:
        "Everything from mobile and camera video shoots, reels, photography, to creative direction and scripting.",
    },
    {
      question: "How do I pay for services?",
      answer:
        "We accept payments via Paystack, Flutterwave, or direct bank transfer. Payment plans may be available depending on the project.",
    },
    {
      question: "Do you work with clients outside Lagos or Nigeria?",
      answer:
        "Absolutely. We work with clients across Africa and the diaspora. Most of our processes are remote-friendly.",
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
