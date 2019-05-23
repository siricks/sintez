import './index.sass'
import {switchOverlay} from '../overlay'

let burger = document.querySelector('.fixed-header__burger'),
	sideMenuClassName = 'side-menu',
	sideMenuActiveClassName = 'active',
	sideMenu = document.querySelector(`.${sideMenuClassName}`)

burger && burger.addEventListener('click', () => {
	sideMenu && sideMenu.classList.toggle(sideMenuActiveClassName)
	switchOverlay({
		activeState: sideMenu.classList.contains(sideMenuActiveClassName),
		activeElement: sideMenuClassName,
		activeElementActiveClassName: sideMenuActiveClassName
	})
})