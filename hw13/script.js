const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'styleTheme.css');
const head = document.querySelector('head');

document.querySelector('.changeBtn').addEventListener('click', function () {
	if (localStorage.getItem('back-Image')) {
		localStorage.removeItem('back-Image');
		link.remove();
	} else {
		localStorage.setItem('back-Image', "url('../img/ocean.jpg')");
		document.head.append(link);
	}
});

window.onload = function () {
	if (localStorage.getItem('back-Image')) {
		document.head.append(link);
	}
};
