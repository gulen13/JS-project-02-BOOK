const themeSwitcher = document.querySelector('.theme-switcher');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const iconLogo = document.querySelector('#iconLogo');
const iconShop = document.querySelector('svg.icon__lock');
const category = document.querySelectorAll('button.categories__btn');
const h2 = document.querySelector('h2.books-section__title');
const btnSeeMore = document.querySelectorAll('button.list-markup__see-more-button');


// const themeBtn = document.querySelector('.switch input');
// const darkPosition = localStorage.getItem('theme');


themeSwitcher.addEventListener('click', function(e) {
    document.body.classList.toggle('dark');
    header.classList.toggle('dark');
    nav.classList.toggle('dark');
    iconLogo.setAttribute('href', e.target.checked ? '/icons.adfc4680.svg#icon-logo-dark' : '/icons.adfc4680.svg#icon-logo');
    iconShop.classList.toggle('dark');
    category.forEach(function(category) {
        category.classList.toggle('dark');
    });
    h2.classList.toggle('dark');
    btnSeeMore.forEach(function(btnSeeMore) {
        btnSeeMore.classList.toggle('dark');
    });
});

 
// themeBtn.addEventListener('change', () => {
//   if (themeBtn.checked === true) {
//     saveToLocalStorage('theme', true);
//   } else {
//     saveToLocalStorage('theme', false);
//   }
// });

 
// if (true === JSON.parse(darkPosition)) {
//     themeBtn.checked = true;
// } else {
//     themeBtn.checked = false
// }

