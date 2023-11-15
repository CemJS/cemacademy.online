import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


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

front.func.test = () => {
    return
}

front.loader = () => {
    Static.skillsResult = [
        "После прохождения курса вы будете разбираться и понимать что такое блокчейн, научитесь зарабатывать на смарт-контрактах и нодах, изучите NFT и токенизацию активов.",
        "Узнаете о монетизации навыков через NFT, освоите рынок криптовалют и заработок в DeFi. Разберетесь в майнинге, кибербезопасности и юридическом регулировании на рынке криптовалют.",
        "Научитесь создавать и реализовывать криптовалютные проектоы, управлять проектами в сфере криптовалют, а также изучите фундаментальный анализ криптоактивов и сформируете инвестиционный портфель.",
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