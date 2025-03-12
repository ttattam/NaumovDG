// Анимации для элементов
document.addEventListener('DOMContentLoaded', function() {
    // Анимация для карточек услуг
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Анимация для галереи
    const galleryItems = document.querySelectorAll('.gallery__item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const img = this.querySelector('.gallery__img');
            img.style.transform = 'scale(1.1)';
        });
        item.addEventListener('mouseleave', function() {
            const img = this.querySelector('.gallery__img');
            img.style.transform = 'scale(1)';
        });
    });
}); 