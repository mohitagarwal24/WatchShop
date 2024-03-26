// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const modalBtns = document.querySelectorAll('.modal-btn');
    const modals = document.querySelectorAll('.modal');
  
    modalBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const modalTarget = this.getAttribute('data-modal-target');
        const modal = document.querySelector(modalTarget);
        modal.style.display = 'block';
  
        const closeBtn = modal.querySelector('.close-btn');
        closeBtn.addEventListener('click', function() {
          modal.style.display = 'none';
        });
  
        window.addEventListener('click', function(e) {
          if (e.target === modal) {
            modal.style.display = 'none';
          }
        });
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('nav ul');
  
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  });
  