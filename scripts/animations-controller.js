document.addEventListener('DOMContentLoaded', function() {
    // Функция для проверки видимости элемента
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Добавляем класс loaded к body для начальной анимации
    document.body.classList.add('loaded');

    // Анимация для всех элементов с data-aos
    const animateElements = () => {
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('aos-animate');
            }
        });
    };

    // Запускаем анимацию при скролле
    window.addEventListener('scroll', animateElements);
    animateElements(); // Запускаем сразу для видимых элементов

    // Анимация для форм
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            this.classList.add('form-submitted');
            // Добавьте здесь логику отправки формы
        });
    });

    // Улучшенный параллакс эффект
    const parallaxElements = document.querySelectorAll('.parallax');
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 1;
            const x = (mouseX * 20) * speed;
            const y = (mouseY * 20) * speed;
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Анимация для кнопок
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Анимация для hero секции
    const heroContent = document.querySelector('.hero__content');
    const heroImage = document.querySelector('.hero__image');

    if (heroContent && heroImage) {
        setTimeout(() => {
            heroContent.classList.add('animate-in');
            heroImage.classList.add('animate-in');
        }, 300);
    }

    // Анимация для рейтинга
    const ratings = document.querySelectorAll('.review-card__rating');
    ratings.forEach(rating => {
        const stars = rating.textContent.split('');
        rating.textContent = '';
        stars.forEach(star => {
            const span = document.createElement('span');
            span.textContent = star;
            rating.appendChild(span);
        });
    });

    // Функция для проверки и добавления анимаций
    function checkAndAddAnimations() {
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('aos-animate');
            }
        });
    }

    // Добавляем обработчик скролла с throttle для оптимизации
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(function() {
            checkAndAddAnimations();
        });
    });

    // Запускаем проверку при загрузке страницы
    window.addEventListener('load', checkAndAddAnimations);
}); 