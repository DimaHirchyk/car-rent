(() => {
  const refs = {
    toggleBtn: document.querySelector("[data-modal-toggle]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.toggleBtn.addEventListener("click", () => {
    refs.modal.classList.toggle("is-open");
    document.body.classList.toggle("modal-open");
    refs.toggleBtn.classList.toggle("is-open"); // для перемикання іконок
  });
})();
