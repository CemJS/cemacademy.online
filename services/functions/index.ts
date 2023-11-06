export * from './sendApi'

export const loader = function (Variable, Fn, Services, Frontends) {
  Variable.bonus = setTimeout(() => {
    Fn.initOne({
      name: "modalSale"
    })
  }, 10000)
}