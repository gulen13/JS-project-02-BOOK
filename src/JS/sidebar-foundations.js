import Swiper, { Navigation, Pagination } from 'swiper';

import { foundationsItems } from './foundationsItems';

const galleryElements = document.querySelector('.swiper-wrapper');

const cardsMarkup = createGalleryCardsMarkup(foundationsItems);

galleryElements.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryCardsMarkup(foundationsItems) {
  return foundationsItems
    .map(({ picture1x, picture2x, link, description }, index) => {
      const formattedNumber = index + 1 < 10 ? `0${index + 1}` : index + 1;
      return `<li class="swiper-slide">
  <p class="foundations__position">${formattedNumber}</p>
  <a class="slider--link" href="${link}" target="_blank" rel="noopener noreferrer">
    <img class="slider--image" srcset="${picture1x}, ${picture2x}" sizes="100vw" src="${picture1x}" alt="${description}" />
  </a>
</li>`;
    })
    .join('');
}

const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
  modules: [Navigation, Pagination],
  direction: 'vertical',
  slidesPerView: 4,
  spaceBetween: 20,
  rewind: true,
  navigation: {
    nextEl: '.slider__next',
  },
  breakpoints: {
    768: {
      slidesPerView: 6,
    },
  },
});
