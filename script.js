/* ================================================
   script.js — Global JavaScript
   Web Pembelajaran Sel Bakteri
   ================================================ */

/* ── Navbar: active link ── */
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.forEach(function (item) { item.classList.remove('active'); });
    this.classList.add('active');
  });
});

/* ── Scroll Reveal ── */
function initRevealOnScroll() {
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length === 0) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(function (el) {
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', initRevealOnScroll);
