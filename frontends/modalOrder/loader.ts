export const loader = function () {
    this.Static.limitComment = 120;
    //-----------------------
    this.Static.form = {
        fullName: {
            value: "",
            valid: false,
            error: false,
            placeholder: "ФИО",
            view: false,
            disable: false
        },
        email: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Email адрес",
            view: false,
            disable: false
        },
        phone: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Телефон",
            view: false,
            disable: false
        },
        telegram: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Telegram",
            view: false,
            disable: false
        },
        comment: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Комментарий",
            view: false,
            disable: false
        },
        isValid: false,
    }

    if (this.Variable.bonus) {
        clearTimeout(this.Variable.bonus)
    }
}