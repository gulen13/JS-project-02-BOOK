const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  menu: document.querySelector('[data-menu]'),
};

refs.openMenuBtn.addEventListener('click', toggleModal);
refs.closeMenuBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.menu.classList.toggle('is-open');
  refs.openMenuBtn.classList.toggle('is-hidden');
  refs.closeMenuBtn.classList.toggle('is-hidden');

  if (refs.openMenuBtn.classList.contains('is-hidden')) {
    document.body.style.overflow = 'hidden';
  }
  if (refs.closeMenuBtn.classList.contains('is-hidden')) {
    document.body.style.overflow = '';
  }
}

const currentPath = window.location.pathname;
const menuItems = document.querySelectorAll('.navigation__item');

menuItems.forEach(item => {
  const link = item.querySelector('a');
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
