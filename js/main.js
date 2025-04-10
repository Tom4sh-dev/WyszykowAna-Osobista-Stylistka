document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('DOMContentLoaded', function () {
	const btnsPrices = document.querySelectorAll('.offer__prices-btn');

	btnsPrices.forEach((button) => {
		button.addEventListener('click', function () {
			const activeText = document.querySelector(
				'.offer__prices-textbox.active'
			);
			const activeIcon = document.querySelector('.offer__prices-btn i.rotated');
			const text = this.nextElementSibling;
			const icon = this.querySelector('i');

			if (activeText && activeText !== text) {
				activeText.style.maxHeight = '0';
				activeText.classList.remove('active');
				if (activeIcon) {
					activeIcon.classList.remove('rotated');
				}
			}

			if (!text.classList.contains('active')) {
				text.classList.add('active');
				text.style.maxHeight = text.scrollHeight + 'px';
				icon.classList.add('rotated');
			} else {
				text.style.maxHeight = '0';
				text.classList.remove('active');
				icon.classList.remove('rotated');
			}
		});
	});
});

const footerYear = document.querySelector('.footer__year');

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
