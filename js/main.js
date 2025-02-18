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



document.addEventListener("DOMContentLoaded", function () {
    const btnsPrices = document.querySelectorAll(".offer__prices-btn");

    btnsPrices.forEach((button) => {
        button.addEventListener("click", function () {
            const activeText = document.querySelector(".offer__prices-textbox.active");
            const activeIcon = document.querySelector(".offer__prices-btn i.rotated");
            const text = this.nextElementSibling;
            const icon = this.querySelector("i");

            if (activeText && activeText !== text) {
                activeText.style.maxHeight = "0";
                activeText.classList.remove("active");
                if (activeIcon) {
                    activeIcon.classList.remove("rotated");
                }
            }

            if (!text.classList.contains("active")) {
                text.classList.add("active");
                text.style.maxHeight = text.scrollHeight + "px";
                icon.classList.add("rotated");
            } else {
                text.style.maxHeight = "0";
                text.classList.remove("active");
                icon.classList.remove("rotated");
            }
        });
    });
});
