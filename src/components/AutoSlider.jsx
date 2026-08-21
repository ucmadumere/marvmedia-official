import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import 'swiper/css';

export default function AutoSlider() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="aximo-auto-slider-section">
      <p className="visually-hidden">Creative Ideas, Visible Results</p>
      <Swiper
        className="aximo-auto-slider"
        aria-hidden="true"
        modules={[Autoplay]}
        loop={!prefersReducedMotion}
        slidesPerView="auto" // allows fluid width
        spaceBetween={30}    // spacing between slides
        speed={10000}         // duration of transition (higher = slower)
        autoplay={prefersReducedMotion ? false : {
          delay: 0,          // continuous, no delay
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: true,
        }}
        freeMode={true}      // no snapping
        freeModeMomentum={false} // pure linear scroll
        grabCursor={false}
        allowTouchMove={false}
      >
        {Array(prefersReducedMotion ? 1 : 8).fill().map((_, i) => (
          <SwiperSlide key={i} style={{ width: 'auto' }}>
            <div className="aximo-auto-slider-item">
              <h3>Creative Ideas, Visible Results</h3>
              {/* <img src="/assets/images/v1/star3.png" alt="" /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
