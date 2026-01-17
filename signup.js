document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.signin-nav')?.addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    /* ===============================
       SLIDER TOGGLE
    =============================== */
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');

    registerBtn?.addEventListener('click', () => {
        container.classList.add('active');
    });

    loginBtn?.addEventListener('click', () => {
        container.classList.remove('active');
    });

    /* ===============================
       REGISTER (NO LOGIN, ONLY REDIRECT)
    =============================== */
    const registerForm = document.querySelector('.form-box.register form');

    registerForm?.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value.trim().toLowerCase();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!email || username.length < 3 || password.length < 8) {
            alert('Password must be at least 8 characters');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.some(u => u.username === username)) {
            alert('Username already exists ❌');
            return;
        }

        users.push({ email, username, password });
        localStorage.setItem('users', JSON.stringify(users));

        // ❌ NO isLoggedIn here
        // ❌ NO currentUser here

        alert('Account created successfully ✅');
        window.location.href = 'index.html';
    });

    /* ===============================
       LOGIN (ONLY PLACE WHERE LOGIN HAPPENS)
    =============================== */
    const loginForm = document.querySelector('.form-box.login form');

    loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();

        const loginUsername = document.getElementById('loginUsername').value.trim();
        const loginPassword = document.getElementById('loginPassword').value.trim();

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const validUser = users.find(
            u => u.username === loginUsername && u.password === loginPassword
        );

        if (!validUser) {
            alert('Invalid username or password ❌');
            return;
        }

        // ✅ LOGIN ONLY HERE
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(validUser));

        window.location.href = 'chat.html';
    });

});
