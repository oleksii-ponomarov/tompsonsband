var mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3010,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
