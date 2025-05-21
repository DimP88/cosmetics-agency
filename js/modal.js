document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".backdrop");
  const modalBtnOpen = document.querySelector(".modal-btn-open");
  const modalBtnClose = document.querySelector(".modal-btn-close");
  const modalContent = document.querySelector(".modal-content"); // Добавляем элемент с контентом модалки

  const toggleModal = () => {
    modal.classList.toggle("is-hidden");
    // Блокировка/разблокировка скролла
    document.body.style.overflow = modal.classList.contains("is-hidden")
      ? ""
      : "hidden";
  };

  // Закрытие по клику на кнопки
  modalBtnOpen.addEventListener("click", toggleModal);
  modalBtnClose.addEventListener("click", toggleModal);

  // Закрытие по клику вне модального окна
  modal.addEventListener("click", function (e) {
    if (e.target === e.currentTarget) {
      // Проверяем, что клик именно на backdrop
      toggleModal();
    }
  });

  // Закрытие по Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("is-hidden")) {
      toggleModal();
    }
  });
});
