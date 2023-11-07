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
  console.log('=f64696=', this.Static.form.fullName)
  if (this.Static.form.fullName.valid) {
    console.log('=ebcebc=', "valid fio")
  } else {
    console.log('=b13505=', "disvalid fio")
  }
  this.init()
}
