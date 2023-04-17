const elements = {
  body: document.body,
  header: document.querySelector('header'),
  nav: document.querySelector('nav'),
  iconLogo: document.querySelector('#iconLogo'),
  iconShop: document.querySelector('svg.icon__lock'),
  categories: document.querySelector('section.categories'),
  btnSeeMore: document.querySelector('.books-container'),
};

const handleChange = (element, theme) => {
  element.classList.toggle('dark', theme === 'dark');
};

const handleThemeChange = theme => {
  Object.values(elements).forEach(element => handleChange(element, theme));

  elements.iconLogo.setAttribute(
    'href',
    theme === 'dark'
      ? '/JS-project-02-BOOK/icons.31d2e38d.svg#icon-logo-dark'
      : '/JS-project-02-BOOK/icons.31d2e38d.svg#icon-logo'
  );
};

const themeSwitcher = document.querySelector('.theme-switcher');
themeSwitcher.addEventListener('click', function (e) {
  const theme = e.target.checked ? 'dark' : 'light';
  handleThemeChange(theme);
});

const themeBtn = document.querySelector('.switch input');
themeBtn.addEventListener('change', () => {
  const theme = themeBtn.checked ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  handleThemeChange(theme);
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  themeBtn.checked = true;
  handleThemeChange(savedTheme);
}
