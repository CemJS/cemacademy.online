export const clickAny = function (e) {
  if (this.Ref.mobileMenu && !this.Ref.mobileMenu.contains(e.target) && !this.Ref.burger.contains(e.target) && this.Variable.openSidebar) {
    this.Variable.openSidebar = false;
    this.Fn.initAll();
  }
  return
}