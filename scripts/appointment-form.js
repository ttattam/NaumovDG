// Обработка формы записи
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация модального окна
    const modal = document.getElementById('appointment-modal');
    const modalOverlay = modal.querySelector('.modal__overlay');
    const modalClose = modal.querySelector('.modal__close');
    const appointmentTypeForm = document.getElementById('appointment-type-form');
    const patientDetailsForm = document.getElementById('patient-details-form');

    // Обработчик для кнопки "Записаться на приём"
    document.querySelectorAll('a[href="#appointment-form"]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            showAppointmentTypeForm(); // Показываем форму выбора типа записи
        });
    });

    // Функция закрытия модального окна
    window.closeModal = function() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Сброс форм
        appointmentTypeForm.reset();
        patientDetailsForm.reset();
        
        // Возвращаем к начальному состоянию
        showAppointmentTypeForm();
    };

    // Закрытие по клику на оверлей
    modalOverlay.addEventListener('click', closeModal);

    // Закрытие по клику на крестик
    modalClose.addEventListener('click', closeModal);

    // Закрытие по клавише Esc
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Функция для показа формы выбора типа записи
    window.showAppointmentTypeForm = function() {
        patientDetailsForm.style.display = 'none';
        appointmentTypeForm.style.display = 'block';
    };

    // Функция для показа анкеты
    function showPatientDetailsForm() {
        appointmentTypeForm.style.display = 'none';
        patientDetailsForm.style.display = 'block';
    }

    // Обработчик отправки формы выбора типа записи
    appointmentTypeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showPatientDetailsForm();
    });

    // Обработчик отправки анкеты
    patientDetailsForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Собираем данные формы
        const formData = {
            appointmentType: document.querySelector('input[name="appointment-type"]:checked').value,
            patientName: document.getElementById('patient-name').value,
            birthDate: document.getElementById('birth-date').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            anamnesis: document.getElementById('anamnesis').value,
            consultationType: document.querySelector('input[name="consultation-type"]:checked').value,
            symptoms: Array.from(document.querySelectorAll('input[name="symptoms"]:checked')).map(cb => cb.value)
        };

        try {
            // Здесь будет отправка данных на сервер
            console.log('Отправка данных:', formData);
            
            // Показываем сообщение об успехе
            alert('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
            
            // Закрываем модальное окно
            closeModal();
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
            alert('Произошла ошибка при отправке данных. Пожалуйста, попробуйте позже.');
        }
    });

    // Маска для телефона
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let x = e.target.value.replace(/\D/g, '')
            .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        
        if (!x[1]) {
            e.target.value = '';
            return;
        }
        
        e.target.value = '+7 ' + (x[2] ? '(' + x[2] : '') +
            (x[3] ? ') ' + x[3] : '') +
            (x[4] ? '-' + x[4] : '') +
            (x[5] ? '-' + x[5] : '');
    });
}); 