document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.media-filter__btn');
    const mediaCards = document.querySelectorAll('.media-card');

    // Добавляем начальную анимацию появления карточек
    setTimeout(() => {
        mediaCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100);
        });
    }, 300);

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Удаляем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('media-filter__btn--active'));
            // Добавляем активный класс нажатой кнопке
            button.classList.add('media-filter__btn--active');

            const filterValue = button.getAttribute('data-filter');

            let delay = 0;

            mediaCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, delay);
                    delay += 100;
                } else {
                    card.classList.remove('visible');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}); 