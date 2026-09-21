/* ===== Mobile Navigation ===== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* Close menu when a link is clicked */
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

/* ===== Active link on scroll ===== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector('.nav__link[href*=' + sectionId + ']');

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add('active-link');
      } else {
        navLink.classList.remove('active-link');
      }
    }
  });
}
window.addEventListener('scroll', scrollActive);

/* ===== Header shadow on scroll ===== */
const header = document.getElementById('header');
function scrollHeader() {
  if (window.scrollY >= 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', scrollHeader);

/* ===== Scroll-up button ===== */
const scrollUp = document.getElementById('scroll-up');
function showScrollUp() {
  if (window.scrollY >= 400) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', showScrollUp);

/* ===== Publication tabs ===== */
const pubTabs = document.querySelectorAll('.pub-tab');
const pubPanels = document.querySelectorAll('.pub-panel');

pubTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-tab');

    pubTabs.forEach(t => t.classList.remove('active'));
    pubPanels.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});

/* ===== Footer year ===== */
document.getElementById('year').textContent = new Date().getFullYear();
