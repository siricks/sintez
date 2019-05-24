import IMask from 'imask'

let telInputs = document.querySelectorAll('.input_tel'),
	nameInputs = document.querySelectorAll('.input_name')

for (let telInput of telInputs) {
	let patternMask = new IMask(telInput, {
		mask: '+{7}(000)000-00-00',
		lazy: true
	})

	telInput.addEventListener('focus', function () {
		patternMask.updateOptions({lazy: false})
		telInput.selectionEnd = 3
	}, true);

	telInput.addEventListener('blur', function () {
		patternMask.updateOptions({lazy: false})
		if (!patternMask.masked.rawInputValue.length) {
			patternMask.updateOptions({lazy: true})
			patternMask.value = ''
		}
	}, true)
}

for (let nameInput of nameInputs) {
	new IMask(nameInput, {
		mask: /^[а-яА-Я]*$/
	})
}