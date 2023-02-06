
// const hamburgerMenu = document.querySelector("#hamburger-menu");

// function toggleNav() {
//   hamburgerMenu.classList.toggle("active");

//   overlay.classList.toggle("overlay-active");
// }

// hamburgerMenu.addEventListener("click", toggleNav);
// navItems.forEach((nav) => {
//   nav.addEventListener("click", toggleNav);
// });



var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




var swiper = new Swiper(".cardSlider", {
  // slidesPerView: 4,
  // centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 320px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // when window width is >= 640px
  }
});

function toggleActiveClass() {
  var activeClass = document.querySelector(".header-bar");
  var menu = document.querySelector(".menu2");

  activeClass.classList.toggle("active");
  menu.classList.toggle("active");
}