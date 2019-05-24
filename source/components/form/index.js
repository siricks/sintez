import './index.sass'
import '../../js/input-mask'

if (window.innerWidth < 1200) {
	let textAreas = document.querySelectorAll('textarea.form__input'),
		inputs = document.querySelectorAll('.form__input'),
		formButtons = document.querySelectorAll('.form__btn')

	const auto_grow = props => {
		let {textarea} = props

		textarea.style.height = "23px";
		textarea.style.height = (textarea.scrollHeight + 3) + "px";
	}

	for (let textarea of textAreas) {
		textarea.addEventListener('keyup', () => {
			if (window.innerWidth < 1200) {
				auto_grow({
					textarea: textarea
				})
			}
		})
	}

	for (let input of inputs) {
		input.addEventListener('keyup', () => {
			if (input.value) {
				input.classList.add('filled')
				input.classList.remove('error')
			} else {
				input.classList.remove('filled')
			}
		})
	}

	for (let formButton of formButtons) {
		formButton.addEventListener('click', () => {
			setTimeout(() => {
				document.activeElement.classList.add('error')
			}, 100)
		})
	}
}