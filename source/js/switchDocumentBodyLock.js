let documentBody = document.body,
	html = document.querySelector('html');

export default function (_state) {
	let state = _state.toUpperCase();

	switch (state) {
		case 'LOCK':
			documentBody.classList.add('no-scroll');
			html.classList.add('no-scroll');
			break;
		case 'UNLOCK':
			documentBody.classList.remove('no-scroll');
			html.classList.remove('no-scroll');
			break;
		default:
			throw new Error(`${state} is not valid state`)
	}
}