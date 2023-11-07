import {
  validFullName,

} from './validator'

interface Form {
  value: string,
  valid: boolean,
  error: boolean | string,
  placeholder: string,
  view: boolean,
  disable: boolean
}

export const formFullName = function (form: Form) {
  if (!form.value.length) {
    form.error = false
    form.valid = false
    return false
  }
  let check = validFullName(form.value)
  if (check) {
    form.error = false
    form.valid = true
    return true
  } else {
    form.error = "Некорректно введён ФИО"
    form.valid = false
    return false
  }
}