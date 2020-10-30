const serviseTitle = document.querySelectorAll('.our-s-link');
const serviseContent = document.querySelectorAll('.our-s-content-list > li');

serviseTitle.forEach(function (item) {
	item.onmouseover = function (event) {
		serviseTitle.forEach(element => {
			element.style.border = 'none';
		});
		let target = event.target;
		target.style.border = '1px solid  #18cfab';
	};
	item.addEventListener('click', function (e) {
		serviseTitle.forEach(curentItem => {
			curentItem.classList.remove('active');
		});
		e.target.classList.add('active');

		serviseContent.forEach(function (elem) {
			if (e.target.dataset.name === elem.dataset.content) {
				elem.classList.add('visible');
			} else {
				elem.classList.remove('visible');
			}
		});
	});
});

const workTitle = document.querySelectorAll('.work-link');
const workContext = document.querySelectorAll('.work-content-item');

workTitle.forEach(function (item) {
	item.addEventListener('click', function (event) {
		workTitle.forEach(curentItem => {
			curentItem.classList.remove('selected');
		});
		event.target.classList.add('selected');
		workContext.forEach(function (element) {
			element.classList.add('work-content-hidden');
			if (event.target.dataset.name === element.dataset.content) {
				element.classList.remove('work-content-hidden');
			}
			if (event.target.dataset.name === 'all') {
				element.classList.remove('work-content-hidden');
			}
		});
	});
});

//work content
const workContentHidden = document.querySelectorAll('.work-content-hidd');
const buttonLoadMore = document.querySelector('.btn-load-more');

buttonLoadMore.addEventListener('click', function () {
	workContentHidden.forEach(element =>
		element.classList.remove('work-content-hidd')
	);
	buttonLoadMore.style.display = 'none';
});

//what people say

const peopleList = document.querySelectorAll('.person-item');
const clickToLeft = document.querySelector('.fa-chevron-left');
const clickToRight = document.querySelector('.fa-chevron-right');
let personBlock = document.querySelectorAll('.person-info');

// смена картинки при нажатии на фотографию
peopleList.forEach(function (item) {
	item.addEventListener('click', function (event) {
		peopleList.forEach(function (elem) {
			elem.classList.remove('person-selected');
		});
		event.target.closest('li').classList.add('person-selected');
		let selectedLi = event.target.closest('li');
		personBlock.forEach(function (element) {
			if (selectedLi.dataset.name === element.dataset.content) {
				personBlock.forEach(function (element) {
					element.classList.remove('person-visible');
				});
				element.classList.add('person-visible');
			}
		});
	});
});
// смена картинки при нажатии на стрелку
clickToRight.addEventListener('click', function () {
	for (let i = 0; i < peopleList.length; i++) {
		if (peopleList[i].classList.contains('person-selected')) {
			peopleList[i].classList.remove('person-selected');
			i++;
			if (i === peopleList.length) {
				i = 0;
			}

			peopleList[i].classList.add('person-selected');
			personBlock.forEach(function (element) {
				if (element.dataset.content === peopleList[i].dataset.name) {
					personBlock.forEach(function (element) {
						element.classList.remove('person-visible');
					});
					element.classList.add('person-visible');
				}
			});
		}
	}
});

clickToLeft.addEventListener('click', function () {
	for (let i = peopleList.length - 1; i > -1; i--) {
		if (peopleList[i].classList.contains('person-selected')) {
			peopleList[i].classList.remove('person-selected');
			if (i === 0) {
				i = peopleList.length;
			}
			i--;
			peopleList[i].classList.add('person-selected');
			personBlock.forEach(function (element) {
				if (element.dataset.content === peopleList[i].dataset.name) {
					personBlock.forEach(function (element) {
						element.classList.remove('person-visible');
					});
					element.classList.add('person-visible');
				}
			});
		}
	}
});
