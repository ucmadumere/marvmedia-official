<Swiper
  modules={[Autoplay]}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  loop={true}
  spaceBetween={30}
  slidesPerView={1}
  breakpoints={{
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  }}
>
  {[...Array(8)].map((_, i) => (
    <SwiperSlide key={i}>
      <div className="aximo-auto-slider-item">
        <h3>Let's create new experiences</h3>
        <img src="/assets/images/v1/star3.png" alt="slider-icon" />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
