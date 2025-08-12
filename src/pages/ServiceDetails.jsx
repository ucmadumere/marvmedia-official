import { useParams } from "react-router-dom";
import services from "../data/services";
import Breadcrumb from "../components/Breadcrumb";
import { useState } from "react";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const [billingType, setBillingType] = useState("monthly");

  if (!service) return <div>Service not found</div>;

  return (
    <>
      <Breadcrumb
        title="Service Details"
        path={[{ name: "Home", link: "/" }, { name: service.title }]}
      />

      <div className="section aximo-section-padding2 pb-0 pt-0">
        <div className="container">
          <div className="aximo-service-details-wrap">
            {/* Pricing Section */}
            <section className="section aximo-section-padding3">
              <div className="container">
                <div className="aximo-pricing-title">
                  <h2>
                    Pick from one of our{" "}
                    <span className="aximo-title-animation">
                      packages
                      <span className="aximo-title-icon">
                        {/* <img src="/assets/images/v1/star2.png" alt="" /> */}
                      </span>
                    </span>
                  </h2>
                </div>

                {/* Toggle Switch */}
                {/* <div className="pricing-btn">
                  <label>Billed monthly</label>
                  <div className="toggle-btn">
                    <input
                      className="form-check-input btn-toggle"
                      type="checkbox"
                      id="price-toggle"
                      checked={billingType === "yearly"}
                      onChange={() =>
                        setBillingType(
                          billingType === "monthly" ? "yearly" : "monthly"
                        )
                      }
                    />
                  </div>
                  <label>Billed annually</label>
                </div> */}

                {/* Pricing Cards */}
                <div className="row" id="table-price-value">
                  {service.pricing?.map((pkg, index) => (
                    <div className="col-xl-4 col-md-6" key={index}>
                      <div
                        className="aximo-pricing-wrap2 wow fadeInUpX"
                        data-wow-delay={`0.${index + 1}s`}
                      >
                        <div className="aximo-pricing-header2">
                          <h5>{pkg.tier}</h5>
                        </div>
                        <div className="aximo-pricing-price2">
                          <h2>₦</h2>
                          <h3 className="aximo-price">
                            {billingType === "monthly"
                              ? pkg.monthly
                              : pkg.yearly}
                          </h3>
                        </div>
                        <div className="aximo-pricing-description">
                          <p>{pkg.description}</p>
                        </div>
                        <div className="aximo-pricing-body2">
                          <ul>
                            {pkg.features?.map((feature, i) => (
                              <li key={i}>
                                <img
                                  src="/assets/images/icon/check-circle-fill.svg"
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
                      </div>
                    </div>
                  ))}
                </div>

                <div className="row" id="table-price-value">
                  <h3 className="aximo-title-animation p-4">
                    {service.subtitle2}
                  </h3>
                  {service.pricing1?.map((pkg, index) => (
                    <div className="col-xl-4 col-md-6" key={index}>
                      <div
                        className="aximo-pricing-wrap2 wow fadeInUpX"
                        data-wow-delay={`0.${index + 1}s`}
                      >
                        <div className="aximo-pricing-header2">
                          <h5>{pkg.tier}</h5>
                        </div>
                        <div className="aximo-pricing-price2">
                          <h2>£</h2>
                          <h3 className="aximo-price">
                            {billingType === "monthly"
                              ? pkg.monthly
                              : pkg.yearly}
                          </h3>
                        </div>
                        <div className="aximo-pricing-description">
                          <p>{pkg.description}</p>
                        </div>
                        <div className="aximo-pricing-body2">
                          <ul>
                            {pkg.features?.map((feature, i) => (
                              <li key={i}>
                                <img
                                  src="/assets/images/icon/check-circle-fill.svg"
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Description Section */}
            <div className="row">
              <div className="col-lg-12">
                <div className="aximo-default-content">
                  <h2 className="aximo-title-animation">
                    {service.subtitle.split(" ").slice(0, 3).join(" ")}{" "}
                    <span className="aximo-title-icon">
                      {/* <img src="/assets/images/v1/star2.png" alt="star" /> */}
                    </span>
                    <br />
                    {service.subtitle.split(" ")[3]}
                    {service.subtitle.split(" ")[4]}
                  </h2>
                  {service.content.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* UI/UX Section */}
            <div className="row">
              <div className="col-lg-12 pb-5">
                <div className="aximo-user-interface">
                  <h3>{service.sub}</h3>
                  <ul>
                    {service.userInterface?.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 pb-5">
                <div className="aximo-user-interface">
                  <h3>{service.sub1}</h3>
                  <ul>
                    {service.userExperience?.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 pb-5">
                <div className="aximo-user-interface">
                  <h3>{service.sub2}</h3>
                  <ul>
                    {service.contentStrategy?.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
