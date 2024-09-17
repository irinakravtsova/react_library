// popup open
const buttonElems = document.querySelectorAll('.btn__popup');
const btnPrivate = document.querySelectorAll('.privacyPolicyLink');
const modalElem = document.querySelector('.modal');

const openModal = (modalSelector, modalBoxSelector, event) => {
  if (event) event.preventDefault();

  const modalElem = document.querySelector(modalSelector);
  const modalBoxElem = document.querySelector(modalBoxSelector);

  modalElem.classList.add('active');
  if (modalBoxElem) {
    modalBoxElem.classList.add('modal__box-active1');
  }

  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollbarWidth + 'px';
};

buttonElems.forEach(button => {
  button.addEventListener('click', (event) => openModal('.modal', null, event));
});

btnPrivate.forEach(button => {
  button.addEventListener('click', (event) => openModal('.modal3', '.modal__box3', event));
});


// popupclose
document.addEventListener('DOMContentLoaded', () => {
  const closeModal = (modalSelector, closeBtnSelector, modalBoxSelector) => {
    const modalElem = document.querySelector(modalSelector);
    const modalBoxElem = modalBoxSelector ? document.querySelector(modalBoxSelector) : null;

    if (!modalElem) return; // Если модальное окно не найдено, выход из функции

    // Закрытие по кнопке закрытия
    const closeBtn = modalElem.querySelector(closeBtnSelector);
    if (closeBtn && typeof closeBtn.addEventListener === 'function') {
      closeBtn.addEventListener("click", () => {
        modalElem.classList.remove("active");
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      });
    }

    // Закрытие по клавише Esc
    window.addEventListener('keydown', (e) => {
      if (e.key === "Escape") {
        modalElem.classList.remove("active");
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      }
    });

    // Закрытие по клику вне модального окна
    if (modalBoxElem) {
      modalElem.addEventListener('click', event => {
        // Если клик был внутри modalBoxElem, то выходим из функции
        if (modalBoxElem.contains(event.target)) {
          return;
        }
        modalElem.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      });
    }
  };

  // Применение для первого модального окна
  closeModal("#my-modal", "#close-my-modal-btn", "#my-modal .modal__box");

  // Применение для второго модального окна
  closeModal(".modal3", ".modal3__close-btn", ".modal3 .modal__box3");
});
// Применение для модальных окон