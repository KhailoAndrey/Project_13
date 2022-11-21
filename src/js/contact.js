(() => {
  const refs = {
    openContactBtn: document.querySelector("[data-modal-open]"),
    closeContactBtn: document.querySelector("[data-modal-close]"),
    contact: document.querySelector("[data-modal]"),
  };

  refs.openContactBtn.addEventListener("click", toggleContact);
  refs.closeContactBtn.addEventListener("click", toggleContact);

  function toggleContact() {
    refs.contact.classList.toggle("is-hidden");
  }
})();
