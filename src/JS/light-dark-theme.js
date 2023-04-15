const themeSwitcher = document.querySelector('.theme-switcher');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const iconLogo = document.querySelector('#iconLogo');
const iconShop = document.querySelector('svg.icon__lock');
const categories = document.querySelector('section.categories');

const handleChange = (element, theme) => {
  if (theme === 'dark') element.classList.add('dark');
  else if (element.classList.contains('dark')) element.classList.remove('dark');
};

themeSwitcher.addEventListener('click', function (e) {
  const theme = e.target.checked ? 'dark' : 'light';

  handleChange(document.body, theme);

  handleChange(header, theme);

  handleChange(nav, theme);

  iconLogo.setAttribute(
    'href',
    e.target.checked
      ? '/icons.adfc4680.svg#icon-logo-dark'
      : '/icons.adfc4680.svg#icon-logo'
  );

  handleChange(iconShop, theme);

  handleChange(categories, theme);

  const btnSeeMore = document.querySelector('.books-container');
  handleChange(btnSeeMore, theme);
});

const themeBtn = document.querySelector('.switch input');
const darkPosition = localStorage.getItem('theme');

themeBtn.addEventListener('change', () => {
  if (themeBtn.checked === true) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

if (darkPosition === 'dark') {
  themeBtn.click();
  console.log(darkPosition);
}
