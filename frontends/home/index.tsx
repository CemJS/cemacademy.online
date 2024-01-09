import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"
import reviews from 'json/reviews.json'


front.listener.finish = () => {
    Static.sections = document.querySelectorAll('.section')
    Static.navLinks = document.querySelectorAll('.header_navList-item')
    Static.menu = document.querySelector('.header_navList')
    Static.advantages = document.querySelector('.advantages_section')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                Static.navLinks.forEach((link: any) => {
                    const linkHref = link.getAttribute('href').replace('#', "")
                    if (linkHref == entry.target.id) {
                        link.classList.add('header_navList-item__active')
                    } else {
                        link.classList.remove('header_navList-item__active')
                    }

                    if (entry.target.id == 'experts') {
                        Ref.scrollTop.classList.add('scrollTop__show')
                    }
                    if (Static.advantages == entry.target) {
                        Ref.scrollTop.classList.remove('scrollTop__show')
                    }

                    if (entry.target.id == 'program') {
                        Ref.question.classList.add('question__show')
                    }
                })
            }
        })
    })

    Static.sections.forEach(section => {
        observer.observe(section)
    })
    return
}

front.func.openReviews = () => {
    const moreButton = document.querySelector('.reviews_more')
    if (Static.reviews.length <= 4) {
        Static.reviews = reviews
        moreButton.innerHTML = 'Свернуть &lt;&lt;'
    } else {
        Static.reviews = Static.reviews.slice(0, 4)
        moreButton.innerHTML = 'Ещё &gt;&gt;'
    }
    Fn.init()
    return
}

front.func.getTimeRemaining = (endtime: string) => {
    const split = endtime.split('/')
    const t = new Date(+split[2], +split[1] - 1, +split[0]).getTime() - new Date().getTime();
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

front.func.counterInterval = () => {
    front.Variable.timerInterval = setInterval(() => {
        Static.timer = Func.getTimeRemaining(Static.counterDeadline)
        Fn.init()
    }, 1000)
}

front.func.checkForm = function () {
    if (Static.form.fullName.valid && Static.form.email.valid) {
        Static.form.isValid = true
    } else {
        Static.form.isValid = false
    }
    Fn.init()
    return
}

front.loader = () => {
    Static.reviews = reviews.slice(0, 4)
    Static.counterDeadline = '22/1/2024'
    Static.timer = Func.getTimeRemaining(Static.counterDeadline)
    Func.counterInterval()
    Static.limitComment = 120;
    //-----------------------
    Static.form = {
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

    if (front.Variable.bonus) {
        clearTimeout(front.Variable.bonus)
    }

    if (front.Variable.bonusWeb) {
        clearTimeout(front.Variable.bonusWeb)
    }
    Static.skillsResult = [
        "После прохождения курса вы будете разбираться и понимать что такое блокчейн, научитесь зарабатывать на смарт-контрактах и нодах, изучите NFT и токенизацию активов.",
        "Узнаете о монетизации навыков через NFT, освоите рынок криптовалют и заработок в DeFi. Разберетесь в майнинге, кибербезопасности и юридическом регулировании на рынке криптовалют.",
        "Научитесь создавать и реализовывать криптовалютные проекты, управлять проектами в сфере криптовалют, а также изучите фундаментальный анализ криптоактивов и сформируете инвестиционный портфель.",
        "Вы узнаете о практической работе с нейросетями ChatGPT и CEM Assistant для вашего бизнеса и жизни."
    ]
    Static.callsResult = [
        "Пришло время качественно изменить свой финансовый уровень, не так ли?",
        "Благодаря криптовалютам вы поменяете образ мышления и начнете зарабатывать в разы больше!",
        "Криптовалюты открывают окно в мир новых финансовых возможностей, вы готовы стать частью этого мира?"
    ]
    return
}

front.display = () => {
    return (
        <Navigation />
    )
}

export { front }