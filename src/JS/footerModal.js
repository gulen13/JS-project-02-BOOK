
 const refs = {
   openModalBtn: document.querySelector('[data-modal-open-footer]'),
   closeModalBtn: document.querySelector('[data-modal-close-footer]'),
   modal: document.querySelector('[data-modal-footer]'),
};
refs.openModalBtn.addEventListener('click', handleOpenModal);
 
function addEvtListener() {
  refs.modal.addEventListener('click', handleCloseModal);
  refs.closeModalBtn.addEventListener('click', handleCloseModal);
  document.addEventListener('keydown', handleEscCloseFooterModal);
}

function removeEvtListener() {
  refs.modal.addEventListener('click', handleCloseModal);
  refs.closeModalBtn.removeEventListener('click', handleCloseModal);
  document.removeEventListener('keydown', handleEscCloseFooterModal);
}

function handleOpenModal() {
  refs.modal.classList.remove('is-hidden');
  addEvtListener();
}

function handleCloseModal() {
   refs.modal.classList.add('is-hidden');
   removeEvtListener();
}

function handleEscCloseFooterModal(event) {

  if (event.type === 'keydown' && event.key === 'Escape') {
    handleCloseModal();
  }

}
