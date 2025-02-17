const navBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__link');

const sections = document.querySelectorAll('.section');


const handleNav = () => {
	navMobile.classList.toggle('nav__list--active');
	navBtn.classList.toggle('is-active');
    sections.forEach((item) => {
    item.classList.toggle('section--nav-active');
    })
	navItems.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav__list--active');
			navBtn.classList.remove('is-active');

            sections.forEach((item) => {
                item.classList.remove('section--nav-active');
                });
		});
	});
};

navBtn.addEventListener('click', handleNav);