import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";

export default function Pricing() {
  const [billingType, setBillingType] = useState("monthly");

  const pricingPackages = [
    {
      title: "Maverick",
      monthly: "₦350,000",
      yearly: "₦4,200,000",

      features: [
        "Social media strategy ",
        "3 platforms",
        "6 posts weekly/platforms ",
        "2 on-site content sessions",
        "Ads management ",
        "Content calendar ",
        "Copywriting (captions)",
        "Graphic designs",
        "Story posts and engagement ",
        "Page monitoring and engagement ",
        "Reports ",
        "Review meeting",
      ],
    },
    {
      title: "Exquisite",
      monthly: "₦250,000",
      yearly: "₦3,000,000",
      features: [
        "2 platforms (Instagram/Pinterest/tiktok/LinkedIn)",
        "Content calendar ",
        "Copywriting (captions)",
        "Graphic designs",
        "Story posts and engagement ",
        "Page monitoring and engagement",
        "Ads management ",
        "On-site Content Creation ",
        "5 posts weekly/platform",
        "Reports ",
        "Review meeting",
      ],
      active: true,
    },
    {
      title: "Compact",
      monthly: "₦100,000 ",
      yearly: "₦1,200,000 ",
      features: [
        "1 platform (Instagram/Pinterest/Tiktok/LinkedIn)",
        "Content calendar ",
        "Copywriting (captions)",
        "Graphics designs",
        "Story posts and engagement ",
        "Page monitoring and engagement",
        "Content Curation",
        "4 posts weekly ",
        "Reports",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Marvmedia | Pricing</title>
        <meta name="description" content="Welcome to MarvMedia's homepage." />
      </Helmet>
      <Breadcrumb title="Pricing" current="Pricing" />
      <div className="section aximo-section-padding3">
        <div className="container">
          <div className="aximo-pricing-title">
            <h2>
              Pick from one of our{" "}
              <span className="aximo-title-animation">
                ready packages
                <span className="aximo-title-icon">
                  <img src="/assets/images/v1/star2.png" alt="star" />
                </span>
              </span>
            </h2>
            <p>
              Experience the Marv effect that blends your brand voice with your
              brand message and produces beautiful results that generate leads
              and significant engagement. At Marv Creative Media Management, we
              craft authentic stories that resonate with your target audience,
              inspire confidence and attract customers. Choose your package
              today and start creating your unique brand identity.
            </p>
          </div>

          {/* Toggle Billing Option */}
          <div className="pricing-btn">
            <label>Billed monthly</label>
            <div className="toggle-btn">
              <input
                type="checkbox"
                className="form-check-input btn-toggle"
                checked={billingType === "yearly"}
                onChange={() =>
                  setBillingType((prev) =>
                    prev === "monthly" ? "yearly" : "monthly"
                  )
                }
              />
            </div>
            <label>Billed annually</label>
          </div>

          {/* Pricing Cards */}
          <div className="row" id="table-price-value">
            {pricingPackages.map((pkg, index) => (
              <div className="col-xl-4 col-md-6" key={index}>
                <div
                  className="aximo-pricing-wrap2 wow fadeInUpX"
                  data-wow-delay={`0.${index + 1}s`}
                >
                  <div className="aximo-pricing-header2">
                    <h5>{pkg.title}</h5>
                  </div>

                  <div className="aximo-pricing-price2">
                    <h3 className="aximo-price">
                      {billingType === "monthly" ? pkg.monthly : pkg.yearly}
                    </h3>
                  </div>

                  <div className="aximo-pricing-description">
                    <p>{pkg.description}</p>
                  </div>

                  <div className="aximo-pricing-body2">
                    <ul>
                      {pkg.features.map((feature, i) => (
                        <li key={i}>
                          <img
                            src="/assets/images/icon/check.svg"
                            alt="check"
                          />
                          <span
                            style={{
                              wordBreak: "break-word",
                              whiteSpace: "normal",
                            }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <a
                    className={`aximo-pricing-btn2 ${
                      pkg.active ? "active" : ""
                    }`}
                    href="#"
                  >
                    Select the package
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
