// Toggle menyu kwenye simu
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('show'));
}

// Onyesha mwaka wa sasa
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Animations kwenye kadi za bidhaa
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
