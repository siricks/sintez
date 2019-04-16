import Swiper from 'swiper'

const mySwiper = new Swiper('.swiper-container', {
	slidesPerView: 2,
	loop: true,
	spaceBetween: 20,
	navigation: {
		nextEl: '.swiper__arrow.swiper__arrow_prev',
		prevEl: '.swiper__arrow.swiper__arrow_next',
	},
})