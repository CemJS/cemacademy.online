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

export const checkForm = function () {
  if (this.Static.form.fullName.valid && this.Static.form.email.valid) {
    this.Static.form.isValid = true
  } else {
    this.Static.form.isValid = false
  }
  this.init()
  return
}
