document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  // Form validation
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const name = document.querySelector('#name');
      const email = document.querySelector('#email');
      const message = document.querySelector('#message');

      if (name.value === '' || email.value === '' || message.value === '') {
        alert('All fields are required!');
        e.preventDefault();
      } else {
        alert('Form submitted successfully!');
      }
    });
  }

  // Fade-in on scroll
  const elements = document.querySelectorAll('.fade-in');
  const options = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach(element => {
    observer.observe(element);
  });

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      console.log("hamburger clicked");
      navMenu.classList.toggle('active');
    });
  }
});