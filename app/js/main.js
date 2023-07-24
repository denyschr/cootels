const accordion = document.querySelector('.accordion')
const accordionListBtns = accordion.querySelectorAll('.accordion__list-btn')

accordionListBtns.forEach.call(accordionListBtns, function (accordionListBtn){
	accordionListBtn.addEventListener('click', function() {

		const currentText = accordionListBtn.parentElement.querySelector('.accordion__list-text');

		accordionListBtn.classList.toggle('accordion__list-btn--active');
		currentText.classList.toggle('accordion__list-text--visible');

		if (currentText.classList.contains('accordion__list-text--visible')) {
			currentText.style.maxHeight = currentText.scrollHeight + 'px'
		} else{
			currentText.style.maxHeight = null;
		}

	});
});

const swiper = new Swiper(".swiper", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	}
});

const btn = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const btnLink = document.querySelector('.header__btn-link');
const body = document.querySelector('body');

btn.addEventListener('click', ()=>{
	btn.classList.toggle('menu-open');
	menu.classList.toggle('menu-open');
	btnLink.classList.toggle('menu-open');
	body.classList.toggle('lock');
});

const spoiler = document.querySelector('.spoiler')
const spoilerListBtns = spoiler.querySelectorAll('.spoiler__list-btn')

spoilerListBtns.forEach.call(spoilerListBtns, function (spoilerListBtn){
	spoilerListBtn.addEventListener('click', function() {

		const currentText = spoilerListBtn.parentElement.querySelector('.spoiler__list-text');

		spoilerListBtn.classList.toggle('spoiler__list-btn--active');
		currentText.classList.toggle('spoiler__list-text--visible');

		if (currentText.classList.contains('spoiler__list-text--visible')) {
			currentText.style.maxHeight = currentText.scrollHeight + 'px'
		} else{
			currentText.style.maxHeight = null;
		}

	});
});

