export const show = function ($el: HTMLElement) {
  setTimeout(() => {
    $el.classList.add('notice__active');
  }, 100);
}

export const close = function () {
  this.Ref.notice.classList.remove('notice__active');
  setTimeout(() => {
    this.clearData();
  }, 500)
}