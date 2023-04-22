const refs = {
  openModalBtn: document.querySelector('[data-modal-open-footer]'),
  closeModalBtn: document.querySelector('[data-modal-close-footer]'),
  backdrop: document.querySelector('[data-modal-footer]'),
};
refs.openModalBtn.addEventListener('click', handleOpenModal);

// function addEvtListener() {
//   refs.modal.addEventListener('click', handleCloseModal);
//   refs.closeModalBtn.addEventListener('click', handleCloseModal);
//   document.addEventListener('keydown', handleEscCloseFooterModal);
//   document.addEventListener('click', handleCloseModal);
// }

// function removeEvtListener() {
//   refs.backdrop.addEventListener('click', handleCloseModal);
//   refs.closeModalBtn.removeEventListener('click', handleCloseModal);
//   document.removeEventListener('keydown', handleEscCloseFooterModal);
//   document.removeEventListener('click', handleCloseModal);
// }

function handleOpenModal() {
  refs.backdrop.classList.remove('is-hidden');
  refs.closeModalBtn.addEventListener('click', handleCloseModal);
  document.addEventListener('keydown', handleEscCloseFooterModal);
  document.addEventListener('click', handleEscCloseFooterModal);
  // addEvtListener();
  document.body.style.overflow = 'hidden';
}

function handleCloseModal() {
  document.body.style.overflow = '';
  refs.backdrop.classList.add('is-hidden');
  refs.closeModalBtn.removeEventListener('click', handleCloseModal);
  document.removeEventListener('keydown', handleEscCloseFooterModal);
  document.removeEventListener('click', handleEscCloseFooterModal);
  // removeEvtListener();
}

function handleEscCloseFooterModal(event) {
  if (
    event.target === refs.backdrop ||
    (event.type === 'keydown' && event.key === 'Escape')
  ) {
    handleCloseModal();
  }
}
