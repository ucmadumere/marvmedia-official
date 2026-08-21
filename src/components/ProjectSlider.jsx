// src/components/ProjectSlider.jsx
import { Link } from "react-router-dom";

const getSrcSet = (image) =>
  image.endsWith(".webp")
    ? `${image.replace(/\.webp$/, "-800.webp")} 800w, ${image} 1600w`
    : undefined;
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import portfolioData from "../data/portfolioData";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

export default function ProjectSlider() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="section dark-bg aximo-section-padding">
      <div className="container">
        <div className="aximo-section-title center light">
          <h2>
            Have a look at some{" "}
            <span className="aximo-title-animation">
              of our projects
              <span className="aximo-title-icon">
                {/* <img src="/assets/images/v1/star2.png" alt="decorative star" /> */}
              </span>
            </span>
          </h2>
        </div>
      </div>

      <Swiper
        className="aximo-project-slider"
        modules={[A11y, Autoplay, Keyboard, Mousewheel, Navigation, Pagination]}
        autoplay={prefersReducedMotion ? false : { delay: 5000, disableOnInteraction: true, pauseOnMouseEnter: true }}
        a11y={{ containerMessage: "Featured projects", nextSlideMessage: "Next project", prevSlideMessage: "Previous project", paginationBulletMessage: "Go to project {{index}}" }}
        keyboard={{ enabled: true }}
        navigation
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
        {portfolioData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="aximo-project-thumb">
              <img
                src={item.mainImage}
                srcSet={getSrcSet(item.mainImage)}
                sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                width={item.mainImageWidth}
                height={item.mainImageHeight}
                loading="lazy"
                alt={item.title}
              />

              <div className="aximo-project-wrap">
                <div className="aximo-project-data">
                  <Link to={`/portfolio/${item.slug}`}>
                    <h3>{item.title}</h3>
                  </Link>
                  {/* <p>{item.summary}</p> */}
                </div>
                <Link
                  className="aximo-project-icon"
                  to={`/portfolio/${item.slug}`}
                  aria-label={`View ${item.title} project`}
                >
                  <svg
                    aria-hidden="true"
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
