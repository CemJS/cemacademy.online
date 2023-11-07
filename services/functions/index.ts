export * from './sendApi'

export const loader = function (Variable, Fn, Services, Frontends) {
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