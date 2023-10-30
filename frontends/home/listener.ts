export const finish = function (e) {
  this.Static.sections = document.querySelectorAll('.section')
  this.Static.navLinks = document.querySelectorAll('.header_navList-item')
  this.Static.menu = document.querySelector('.header_navList')
  this.Static.advantages = document.querySelector('.advantages_section')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.Static.navLinks.forEach((link: any) => {
          const linkHref = link.getAttribute('href').replace('#', "")
          if (linkHref == entry.target.id) {
            link.classList.add('header_navList-item__active')
          } else {
            link.classList.remove('header_navList-item__active')
          }

          if (entry.target.id == 'experts') {
            this.Ref.scrollTop.classList.add('scrollTop__show')
          }
          if (this.Static.advantages == entry.target) {
            this.Ref.scrollTop.classList.remove('scrollTop__show')
          }
        })
      }
    })
  })

  this.Static.sections.forEach(section => {
    observer.observe(section)
  })
}

