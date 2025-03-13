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

    // Обработка прозрачности хедера при скролле
    function handleHeaderTransparency() {
        const header = document.querySelector('.header');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            document.querySelectorAll('.nav__link').forEach(link => {
                link.style.color = '#2C5282';
            });
            document.querySelector('.logo__text').style.color = '#2C5282';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.boxShadow = 'none';
            document.querySelectorAll('.nav__link').forEach(link => {
                link.style.color = 'white';
            });
            document.querySelector('.logo__text').style.color = 'white';
        }
    }

    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', handleHeaderTransparency);
    // Вызываем функцию при загрузке страницы
    window.addEventListener('load', handleHeaderTransparency);
}); 