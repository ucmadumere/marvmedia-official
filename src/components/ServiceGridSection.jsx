import { Link } from "react-router-dom";
import services from "../data/services";

export default function ServiceGridSection() {
  // const services = [
  //   {
  //     icon: "icon-design-tools",
  //     title: "UI/UX Design",
  //     slug: "ui-ux-design",
  //     desc:
  //       "Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app.",
  //   },
  //   {
  //     icon: "icon-branding",
  //     title: "Graphic Design",
  //      slug: "graphic-design",
  //     desc:
  //       "Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.",
  //   },
  //   {
  //     icon: "icon-web",
  //     title: "Web Design",
  //     slug: "web-design",
  //     desc:
  //       "Designing and developing websites to ensure they are visually appealing, user-friendly, and functional.",
  //   },
  //   {
  //     icon: "icon-design-thinking",
  //     title: "Motion Graphics",
  //     slug: "motion-graphics",
  //     desc:
  //       "Creating animated graphics and videos for marketing and entertainment to help sell a product or service.",
  //   },
  //   {
  //     icon: "icon-layers",
  //     title: "Packaging Design",
  //     slug:"packaging-design",
  //     desc:
  //       "Creating packaging solutions that protect products and attract customers on store shelves.",
  //   },
  //   {
  //     icon: "icon-rating-stars-1",
  //     title: "Logo and Branding",
  //     slug: "logo-branding",
  //     desc:
  //       "Creating or refreshing logos and developing a cohesive visual identity, including business cards and style guides.",
  //   },
  //   {
  //     icon: "icon-chef",
  //     title: "Illustration",
  //     slug: "illustration",
  //     desc:
  //       "Producing custom illustrations for books, websites, marketing materials, and editorial content.",
  //   },
  //   {
  //     icon: "icon-target-1",
  //     title: "Product Design",
  //     slug: "product-design",
  //     desc:
  //       "Designing the look and feel of physical products, focusing on ergonomics, aesthetics, and functionality.",
  //   },
  // ];

  return (
    <div className="section aximo-section-padding3">
      <div className="container">
        <div className="aximo-section-title center">
          <h3>
            Built for Brands{" "}
            <span className="aximo-title-animation">
              Seeking More Than Just <em>Content</em>
              {/* <span className="aximo-title-icon">
                <img src="/assets/images/v1/star2.png" alt="decorative star" />
              </span> */}
            </span>
          </h3>
          <p className="pt-2">
            Whether you're a solo founder, startup, or scaling business. Our
            services are designed to meet you where you are and help you grow.{" "}
          </p>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-6" key={index}>
              <div
                className="aximo-iconbox-wrap wow fadeInUpX"
                data-wow-delay={`${index * 0.1}s`}
              >
                <div className="aximo-iconbox-icon">
                  <i className={service.icon}></i>
                </div>
                <div className="aximo-iconbox-data">
                  <h6>{service.title}</h6>
                  <p>{service.desc}</p>
                  <Link className="aximo-icon" to={`/services/${service.slug}`}>
                    <img
                      src="/assets/images/icon/arrow-right.svg"
                      alt="arrow"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
