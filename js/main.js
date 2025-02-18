document.addEventListener('DOMContentLoaded', function () {
    const offerItems = document.querySelectorAll('.offer__item');

    offerItems.forEach((item) => {
        const btnOpen = item.querySelector('.offer__btn');
        const offerMore = item.querySelector('.offer__more');
        const btnClose = item.querySelector('.offer__btn-close')

        btnOpen.addEventListener('click', () => {
            offerMore.classList.add('offer__more--active');
            item.scrollIntoView({ behavior: "smooth", block: "start" });
        });

        btnClose.addEventListener('click', () => {
            offerMore.classList.remove('offer__more--active')
        })

    });
});