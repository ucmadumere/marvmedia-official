// src/components/ProjectSlider.jsx
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function ProjectSlider() {
  const projects = [
    {
      title: "LUXÉ DENTAL",
      desc: " Partnered with Colgate to showcase Luxé Dental at BBNaija, creating real-time, culture-aligned content.",
      img: "project1.png",
    },
    {
      title: "Logo and Branding",
      desc: "Creating or refreshing a company's logo and developing a cohesive visual identity.",
      img: "project2.png",
    },
    {
      title: "App UI/UX Design",
      desc: "Designing the UI/UX for mobile apps and web applications to ensure usability & engagement.",
      img: "project3.png",
    },
    {
      title: "Packaging Design",
      desc: "Creating packaging solutions for products that not only protect but also attract customers.",
      img: "project4.png",
    },
    {
      title: "Product Design",
      desc: "Developing the look and feel of physical products, aesthetics, and functionality.",
      img: "project1.png",
    },
    {
      title: "Logo and Branding",
      desc: "Creating or refreshing a company's logo and developing a cohesive visual identity.",
      img: "project2.png",
    },
  ];

  return (
    <div className="section dark-bg aximo-section-padding">
      <div className="container">
        <div className="aximo-section-title center light">
          <h2>
            Have a look at some{" "}
            <span className="aximo-title-animation">
              of our projects
              <span className="aximo-title-icon">
                <img src="/assets/images/v1/star2.png" alt="decorative star" />
              </span>
            </span>
          </h2>
        </div>
      </div>

      <Swiper
        className="aximo-project-slider"
        modules={[Pagination, Autoplay, Mousewheel]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={false}
        spaceBetween={30}
        slidesPerView={1}
        direction="horizontal"
        mousewheel={{ forceToAxis: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {projects.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="aximo-project-thumb">
              <img src={`/assets/images/v1/${item.img}`} alt={item.title} />
              <div className="aximo-project-wrap">
                <div className="aximo-project-data">
                  <Link to="/single-portfolio">
                    <h3>{item.title}</h3>
                  </Link>
                  <p>{item.desc}</p>
                </div>
                <Link className="aximo-project-icon" to="/single-portfolio">
                  <svg
                    width="34"
                    height="28"
                    viewBox="0 0 34 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                      stroke="#FDFDE1"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
