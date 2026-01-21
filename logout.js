const logoutBtn = document.querySelector('.logout');
const modal = document.getElementById('logoutModal');
const cancelBtn = document.getElementById('cancelLogout');
const confirmBtn = document.getElementById('confirmLogout');

// Open modal
logoutBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

// Close modal
cancelBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Logout and redirect
confirmBtn.addEventListener('click', () => {
  // Clear login state (if you use localStorage/session)
  localStorage.clear();

  // Redirect to home page
  window.location.href = 'index.html'; // change if your home page filename is different
});
