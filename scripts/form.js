document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Валидация формы
            const name = this.querySelector('[name="name"]').value;
            const email = this.querySelector('[name="email"]').value;
            const message = this.querySelector('[name="message"]').value;
            
            if (!name || !email || !message) {
                alert('Пожалуйста, заполните все поля формы');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Пожалуйста, введите корректный email');
                return;
            }
            
            // Здесь можно добавить отправку данных на сервер
            alert('Спасибо! Ваше сообщение отправлено.');
            this.reset();
        });
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}); 