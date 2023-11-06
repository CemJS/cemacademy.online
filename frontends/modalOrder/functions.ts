export const show = function ($el: HTMLElement) {
  setTimeout(() => {
    $el.classList.add('modal__active');
    // this.Variable.$el.body.style.overflow = 'hidden';
  }, 100);
}

export const close = function () {
  this.Ref.modal.classList.remove('modal__active');
  setTimeout(() => {
    this.clearData();
    // this.Variable.$el.body.style.overflow = 'auto';
  }, 500)
}

