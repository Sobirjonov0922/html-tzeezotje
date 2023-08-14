// GSAP
gsap.from('.nav', {
  y: -50,
  duration: 1,
  ease: 'bounce',
})
gsap.from('.header__subtitle', {
  opacity: 0,
  duration: 1.25,
  delay: .25,
})
gsap.from('.header__title', {
  opacity: 0,
  duration: 1.25,
  delay: .25,
})
// GSAP

// Slider
const reviewsSwiper = new Swiper('.reviews__slides', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 500,
  navigation: {
    nextEl: ".reviews-btn__next",
    prevEl: ".reviews-btn__prev",
  },
})

const cafeTypesSwiper = new Swiper('.cafe-types__swiper', {
  slidesPerView: 2.2,
  spaceBetween: 30,
  speed: 500,
  navigation: {
    nextEl: ".cafe-types-btn__next",
    prevEl: ".cafe-types-btn__prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    481: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
  },
})
// Slider

// Scroll To Top
let scrollToTop = document.querySelector('.scrollToTop')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 150) {
    scrollToTop.classList.add('active')
  } else {
    scrollToTop.classList.remove('active')
  }
})
// Scroll To Top

// Nav Burger
let navBurger = document.querySelector('.nav__burger')

navBurger.addEventListener('click', function () {
  this.classList.toggle('active')
})

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    navBurger.classList.remove('active')
  }
})
// Nav Burger