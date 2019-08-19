const NOTIFICATIONS = {
	facebook: ['one'],
	gmail: ['one', 'two'],
	work: ['one', 'two', 'three']
};

const DOM = {
	notificationSpans: [
		document.querySelector('.section_header_notification_span_facebook'),
		document.querySelector('.section_header_notification_span_gmail'),
		document.querySelector('.section_header_notification_span_work')
	],
	main: document.querySelector('.main'),
	googleButton: document.querySelector('.google_button'),
	googleForm: document.querySelector('.google_form'),
	googleInput: document.querySelector('.google_form_input'),
	sections: [...document.querySelectorAll('.section')]
};

const REQUESTS = {
	getWeather: { call: new XMLHttpRequest(), url: 'https://jsonplaceholder.typicode.com/posts' }
};

// GOOGLE FORM
DOM.googleForm.addEventListener('submit', e => {
	e.preventDefault();
	DOM.googleButton.setAttribute('href', DOM.googleInput.value);
	DOM.googleButton.click();
});

// SECTION SIZING
DOM.sections.forEach(section =>
	section.addEventListener('click', () => {
		DOM.sections.forEach(section => {
			if (section.classList.contains('section_active')) {
				section.classList.remove('section_active');
			}
		});
		return section.classList.toggle('section_active');
	})
);
DOM.googleForm.addEventListener('click', () =>
	DOM.sections.forEach(section => section.classList.remove('section_active'))
);

// ON PAGE LOAD, LET 'ER RIP
(() => {
	[...Object.values(REQUESTS)].forEach(request => {
		request.call.addEventListener('load', console.log('loading'));
		request.call.open('GET', request.url);
		request.call.send();
		// console.log([...REQUESTS.getWeather.responseText]);
	});
	return DOM.notificationSpans.forEach(
		spanElement =>
			(spanElement.innerText =
				NOTIFICATIONS[
					`${spanElement.classList[0].split('_')[spanElement.classList[0].split('_').length - 1]}`
				].length)
	);
})();
