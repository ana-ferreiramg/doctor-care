function onScroll() {
  const nav = document.getElementById('navigation');

  if (scrollY > 0) {
    nav.classList.add('nav--scroll');
  } else {
    nav.classList.remove('nav--scroll');
  }
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
