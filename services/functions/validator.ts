export const validEmail = function (email: string) {

}

export const validFullName = function (fullName: string) {
  let regFullName = /^([ёЁ\sA-zА-я -]*)$/i
  if (!regFullName.test(fullName)) {
    return false
  } else {
    return true
  }
}

export const validTelegram = function (telegram: string) {
  // необязательный параметр, проверка что поле не пустое
}

export const validComment = function (comment: string) {
  // необязательный параметр, проверка на т, что ком-ий не больше 120 символов 
}