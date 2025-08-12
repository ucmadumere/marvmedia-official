import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function AutoSlider() {
  return (
    <div className="aximo-auto-slider-section">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView="auto" // allows fluid width
        spaceBetween={30}    // spacing between slides
        speed={10000}         // duration of transition (higher = slower)
        autoplay={{
          delay: 0,          // continuous, no delay
          disableOnInteraction: false,
        }}
        freeMode={true}      // no snapping
        freeModeMomentum={false} // pure linear scroll
        grabCursor={false}
      >
        {Array(8).fill().map((_, i) => (
          <SwiperSlide key={i} style={{ width: 'auto' }}>
            <div className="aximo-auto-slider-item">
              <h3>Let's create new experiences</h3>
              {/* <img src="/assets/images/v1/star3.png" alt="" /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
