// Обработка переключения между формами входа/регистрации
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

[loginBtn, registerBtn].forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        loginBtn.classList.remove('active');
        registerBtn.classList.remove('active');
        btn.classList.add('active');
        
        loginForm.classList.toggle('active', btn === loginBtn);
        registerForm.classList.toggle('active', btn === registerBtn);
    });
});

// Обработка отправки форм
document.querySelectorAll('.auth-form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        window.location.href = 'main.html';
    });
});