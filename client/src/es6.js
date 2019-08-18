const DOM = {
	googleButton: document.querySelector('.google_button'),
	googleForm: document.querySelector('.google_form'),
	googleInput: document.querySelector('.google_form_input')
};

// GOOGLE FORM
DOM.googleForm.addEventListener('submit', e => {
	e.preventDefault();
	DOM.googleButton.setAttribute('href', DOM.googleInput.value);
	DOM.googleButton.click();
});

(() => {
	console.log('hello');
	const getWeather = new XMLHttpRequest();
	getWeather.addEventListener('load', console.log('loading'));
	getWeather.open('GET', 'https://jsonplaceholder.typicode.com/posts');
	getWeather.send();
	console.log([...getWeather.responseText]);
})();
