const NOTIFICATIONS = {
	facebook: ['one'],
	gmail: ['one', 'two'],
	work: ['one', 'two', 'three']
};

const DOM = {
	navNotifications: [...document.querySelectorAll('.nav_notification_span')],
	navLinks: [...document.querySelectorAll('.nav_button')],
	main: document.querySelector('.main'),
	googleButton: document.querySelector('.google_button'),
	googleForm: document.querySelector('.google_form'),
	googleInput: document.querySelector('.google_form_input'),
	sections: [...document.querySelectorAll('.section')]
};

const REQUESTS = {
	getWeather: new XMLHttpRequest()
};

// NAV
DOM.navLinks.forEach((link, i) =>
	link.addEventListener('click', () => {
		if (DOM.main.classList[DOM.main.classList.length - 1].toString().includes('main_viewport_offset')) {
			DOM.main.classList.remove(DOM.main.classList[DOM.main.classList.length - 1]);
		}
		return DOM.main.classList.add(`main_viewport_offset_${i}`);
	})
);

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
)(
	// ON PAGE LOAD, LET 'ER RIP
	() => {
		[...Object.values(REQUESTS)].forEach(request => {
			request.addEventListener('load', console.log('loading'));
			request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
			request.send();
			console.log([...REQUESTS.getWeather.responseText]);
		});
		return DOM.navNotifications.forEach(
			spanElement =>
				(spanElement.innerText =
					NOTIFICATIONS[
						`${
							spanElement.classList[spanElement.classList.length - 1].split('_')[
								spanElement.classList[spanElement.classList.length - 1].split('_').length - 1
							]
						}`
					].length)
		);
	}
)();
