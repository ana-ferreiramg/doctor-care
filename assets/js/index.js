checkDevice();

function onScroll() {
  const nav = document.getElementById('navigation');
  let contentHeight = window.scrollY;

  scrollY > 0 || contentHeight > 0
    ? nav.classList.add('nav--scroll')
    : nav.classList.remove('nav--scroll');
}

const menubar = document.querySelector('nav .navbar button');
menubar.addEventListener('click', () => {
  expandedMenu();
});

function expandedMenu() {
  const body = document.querySelector('body');
  const nav = document.getElementById('navigation');
  const menu = document.querySelector('nav .menu');
  const menuIcon = document.querySelector('nav .navbar button i');

  let isMobile = checkDevice();

  if (isMobile) {
    body.classList.toggle('menu-expanded');
    nav.classList.toggle('active');
    menu.classList.toggle('active');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');

    if (menubar.ariaLabel === 'Abrir menu') {
      menubar.ariaLabel = 'Fechar menu';
      menubar.ariaExpanded = 'true';
    } else {
      menubar.ariaLabel = 'Abrir menu';
      menubar.ariaExpanded = 'false';
    }
  }
}

function checkDevice() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

ScrollReveal({
  reset: true,
}).reveal(
  `.stats__card, .services__group-cards, .card, #about div, #about img`,
  {
    delay: 500,
  }
);
