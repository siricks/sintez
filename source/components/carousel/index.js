import Swiper from 'swiper'

let swiperContainers = document.querySelectorAll('.swiper-container')

setTimeout(() => {
	for(let swiperContainer of swiperContainers) {
		new Swiper(swiperContainer, {
			slidesPerView: parseInt(swiperContainer.getAttribute('data-slidesPerView')) || 'auto',
			loop: swiperContainer.getAttribute('data-loop'),
			spaceBetween: parseInt(swiperContainer.getAttribute('data-spaceBetween')),
			navigation: {
				nextEl: swiperContainer.parentNode.querySelector('.swiper__arrow.swiper__arrow_prev'),
				prevEl: swiperContainer.parentNode.querySelector('.swiper__arrow.swiper__arrow_next'),
			}
		})
	}
}, 100)