export * from './sendApi'

export const loader = function (Variable, Fn, Services, Frontends) {
  let nowTime = Math.floor(Date.now() / 1000)
  if (localStorage.dateStop && localStorage.dateStop + (60 * 60 * 24 * 14) >= nowTime) {
    delete localStorage.dateStop
    delete localStorage.sendForm
    delete localStorage.visit
  }

  if (localStorage.visit && localStorage.visit > 7) {
    localStorage.dateStop = nowTime
  }

  if (!localStorage.dateStop && !localStorage.sendForm) {

  }

  // localStorage.test = 1
  Variable.bonusProc = 10


  console.log('=8b39d7=', localStorage.dateStop, localStorage.sendForm, localStorage.visit)
  Variable.bonus = setTimeout(() => {
    Fn.initOne({
      name: "modalSale"
    })
  }, 10000)


  // Variable.webinar = setTimeout(() => {
  //   Fn.initOne({
  //     name: "modalWebinar",
  //     title: "Записаться на бесплатный вебинар"
  //   })
  // }, 10000)
}