export const show = function ($el: HTMLElement) {
  setTimeout(() => {
    $el.classList.add('sale__active');
  }, 100);
}

export const close = function () {
  this.Ref.sale.classList.remove('sale__active');
  setTimeout(() => {
    this.clearData();
  }, 500)
}