(() => {
  const refs = {
    openContactBtn: document.querySelector('.js-modal-open'),
    closeContactBtn: document.querySelector('.js-modal-close'),
    contact: document.querySelector('.js-menu-container'),
  };

  refs.openContactBtn.addEventListener('click', toggleContact);
  refs.closeContactBtn.addEventListener('click', toggleContact);

  function toggleContact() {
    refs.contact.classList.toggle('modal--is-hidden');
  }
})();

(() => {
  const refs = {
    openContactBtn: document.querySelector('.js-modal-open--thank'),
    closeContactBtn: document.querySelector('.js-modal-close--thank'),
    contact: document.querySelector('.js-overlay-modal--thank'),
  };

  refs.openContactBtn.addEventListener('click', toggleContact);
  refs.closeContactBtn.addEventListener('click', toggleContact);

  function toggleContact() {
    refs.contact.classList.toggle('modal--is-hidden');
  }
})();
