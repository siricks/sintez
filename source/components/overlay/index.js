import './index.sass'

const overlayActiveData = 'data-active-element',
	overlayActiveElementActiveClassData = 'data-active-element-active-class',
	overlay = document.querySelector('.overlay'),
	overlayActiveClass = 'active',
	body = document.body,
	html = document.documentElement,
	overflowClass = 'locked',
	switchOverlay = props => {
		let {activeState, activeElement, activeElementActiveClassName} = props

		if (activeState && overlay) {
			overlay.classList.add(overlayActiveClass)
			overlay.setAttribute(overlayActiveData, activeElement)
			overlay.setAttribute(overlayActiveElementActiveClassData, activeElementActiveClassName)
			html.classList.add(overflowClass)
			body.classList.add(overflowClass)
		} else {

			if (overlay) {
				let activeElement = document.querySelector(`.${overlay.getAttribute(overlayActiveData)}`),
					activeElementActiveClassName = overlay.getAttribute(overlayActiveElementActiveClassData)

				activeElement && activeElement.classList.remove(activeElementActiveClassName)
				overlay.classList.remove(overlayActiveClass)
				overlay.removeAttribute(overlayActiveData)
				overlay.removeAttribute(overlayActiveElementActiveClassData)
				body.classList.remove(overflowClass)
				html.classList.remove(overflowClass)
			}
		}
	}

overlay && overlay.addEventListener('click', () => {
	switchOverlay({
		activeState: false
	})
})


export {switchOverlay}