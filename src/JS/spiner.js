export function spinerRender() {
  setTimeout(function () {
    const spiner = document.querySelector('.lds-roller');
    if (!spiner.classList.contains('visually-hidden')) {
      // клас done - приберає лоадер
      spiner.classList.add('visually-hidden');
    }
  }, 2500);
}