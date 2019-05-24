import Swiper from 'swiper'
import './index.sass'

let swiperContainers = document.querySelectorAll('.swiper-container')

setTimeout(() => {
	for (let swiperContainer of swiperContainers) {
		new Swiper(swiperContainer, {
			slidesPerView: window.innerWidth >= 1200 ? parseInt(swiperContainer.getAttribute('data-slidesPerView')) || 'auto' : 'auto',
			loop: swiperContainer.getAttribute('data-loop'),
			spaceBetween: window.innerWidth >= 1200 ? parseInt(swiperContainer.getAttribute('data-spaceBetween') ? swiperContainer.getAttribute('data-spaceBetween') : 0) : 4,
			navigation: {
				nextEl: swiperContainer.getAttribute('data-arrows') ? swiperContainer.parentNode.querySelector('.swiper__arrow.swiper__arrow_prev') : false,
				prevEl: swiperContainer.getAttribute('data-arrows') ? swiperContainer.parentNode.querySelector('.swiper__arrow.swiper__arrow_next') : false,
			},
			effect: swiperContainer.getAttribute('data-effect') ? swiperContainer.getAttribute('data-effect') : false,
			fadeEffect: {
				crossFade: true
			},
			pagination: {
				el: swiperContainer.parentNode.querySelector('.swiper-pagination') || swiperContainer.querySelector('.swiper-pagination') ? swiperContainer.parentNode.querySelector('.swiper-pagination') || swiperContainer.querySelector('.swiper-pagination') : false,
				clickable: true
			}
		})
	}
}, 100)