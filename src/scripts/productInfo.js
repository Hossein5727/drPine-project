var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="swiper-pagination-bullet "></span>`;
    },
  },
  slidesPerView: 2,
  spaceBetween: 30,
});
