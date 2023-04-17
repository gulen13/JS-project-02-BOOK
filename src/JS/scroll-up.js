const observer = new IntersectionObserver(observerTriger);

const scrollBtn = document.querySelector('.scrollToTopBtn');
const scrollObservable = document.querySelector('.page-header');

observer.observe(scrollObservable);
scrollBtn.addEventListener('click', onTopButton);

function onTopButton() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function observerTriger(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      scrollBtn.classList.add('showBtn');
    } else {
      scrollBtn.classList.remove('showBtn');
    }
  });
}
