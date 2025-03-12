document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для кнопки "Записаться на приём"
    const appointmentButtons = document.querySelectorAll('a[href="#appointment-form"]');
    const modal = document.getElementById('appointment-modal');
    
    if (appointmentButtons.length > 0 && modal) {
        appointmentButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
    }

    // Закрытие модального окна
    const modalOverlay = modal?.querySelector('.modal__overlay');
    const modalClose = modal?.querySelector('.modal__close');

    if (modalOverlay) {
        modalOverlay.addEventListener('click', function() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', function() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#appointment-form') return;
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Анимация появления элементов при скролле
    const animateElements = document.querySelectorAll('[data-aos]');
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    };

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Мобильное меню
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav__list');

    if (navToggle && navList) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.classList.toggle('active');
            navList.classList.toggle('active');
        });

        // Закрытие меню при клике вне его
        document.addEventListener('click', function(event) {
            const isClickInside = navList.contains(event.target) || navToggle.contains(event.target);
            
            if (!isClickInside && navList.classList.contains('active')) {
                navToggle.classList.remove('active');
                navList.classList.remove('active');
            }
        });
    }

    // Обработка формы
    const appointmentForm = document.getElementById('appointment-type-form');
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const appointmentType = formData.get('appointment-type');
        console.log('Выбранный тип записи:', appointmentType);
        // Здесь будет код для перехода к следующему шагу
    });
}); 