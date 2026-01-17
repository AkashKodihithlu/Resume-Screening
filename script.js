document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.signin')?.addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    document.querySelector('.signup')?.addEventListener('click', () => {
        window.location.href = 'signup.html';
    });

    document.querySelector('.signin-nav')?.addEventListener('click',()=> {
        window.location.href = 'index.html';
    
    });
});