import Swiper, { Navigation, Pagination } from 'swiper';

import { foundationsItems } from './foundationsItems';

const galleryElements = document.querySelector('.swiper-wrapper');

const cardsMarkup = createGalleryCardsMarkup(foundationsItems);

galleryElements.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryCardsMarkup(foundationsItems) {
  return foundationsItems
    .map(({ number, picture1x, link, description }) => {
      return `<li class="swiper-slide">
  <p class="number">${number}</p>
  <a class="slider--link" href="${link}" target="_blank" rel="noopener noreferrer">
    <img class="slider--image" src="${picture1x}" alt="${description}" />
  </a>
</li>`;
    })
    .join('');
}

const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
  modules: [Navigation, Pagination],
  direction: 'vertical',
  slidesPerView: 4,
  spaceBetween: 10,
  rewind: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider__next',
    // prevEl: '.slider__prev',
  },
});
