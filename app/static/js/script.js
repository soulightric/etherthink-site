let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll turun -> sembunyikan navbar
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // Scroll naik -> tampilkan navbar
    navbar.style.transform = 'translateY(0)';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Fix untuk scroll atas
});
