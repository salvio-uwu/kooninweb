document.addEventListener('DOMContentLoaded', () => {
  
  // --- 1. MENÚ MÓVIL ---
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
      
      // Animación simple de las barras del icono hamburguesa
      navToggle.classList.toggle('open');
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('open');
      });
    });
  }

  // --- 2. HEADER SCROLL EFFECT (Glassmorphism intensidad) ---
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
    } else {
      header.style.boxShadow = "none";
    }
  });

  // --- 3. ANIMACIONES AL SCROLL (Intersection Observer) ---
  const revealElements = document.querySelectorAll('.reveal-up');

  const revealOptions = {
    threshold: 0.15, // Se activa cuando el 15% del elemento es visible
    rootMargin: "0px 0px -50px 0px"
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // Dejar de observar una vez animado
    });
  }, revealOptions);

  revealElements.forEach(el => revealOnScroll.observe(el));
});
