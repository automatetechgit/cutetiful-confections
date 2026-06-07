// Cutetiful Confections — Interactions

document.addEventListener('DOMContentLoaded', () => {

  // Nav scroll effect
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.flavor-card, .gallery-item, .about-text, .about-visual')
    .forEach(el => observer.observe(el));

  // Smooth stagger for flavor cards
  document.querySelectorAll('.flavor-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });

  // Smooth stagger for gallery items
  document.querySelectorAll('.gallery-item').forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.06}s`;
  });

});
